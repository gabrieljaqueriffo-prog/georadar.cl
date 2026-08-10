#!/usr/bin/env node
/**
 * scripts/audit.js
 * Auditoría estructural del sitio georadar.cl
 *
 * Valida:
 *   1. Integridad de links internos (href="/..." → archivo existe)
 *   2. Integridad de anchors en glosario (href="/glosario/#term" → anchor existe)
 *   3. Cobertura del glosario (términos técnicos usados sin link)
 *   4. Links entrantes por página (mínimo según KNOWLEDGE_MAP)
 *   5. Footer-bottom relevante para la sección
 *   6. Conexiones requeridas entre páginas (según KNOWLEDGE_MAP)
 *
 * Uso:
 *   node scripts/audit.js           → reporte completo
 *   node scripts/audit.js --strict  → exit 1 si hay errores (para pre-commit)
 */

'use strict';

const fs   = require('fs');
const path = require('path');

const ROOT      = path.resolve(__dirname, '..');
const SITE_ROOT = path.join(ROOT, '_site');
const MAP       = JSON.parse(fs.readFileSync(path.join(ROOT, 'docs/KNOWLEDGE_MAP.json'), 'utf8'));
const STRICT    = process.argv.includes('--strict');

// ─── helpers ────────────────────────────────────────────────────────────────

function readFile(rel) {
  const abs = path.join(SITE_ROOT, rel);
  return fs.existsSync(abs) ? fs.readFileSync(abs, 'utf8') : null;
}

function fileExistsForPath(urlPath) {
  if (urlPath === '/') return fs.existsSync(path.join(SITE_ROOT, 'index.html'));
  const clean = urlPath.replace(/^\//, '').replace(/\/$/, '');
  return (
    fs.existsSync(path.join(SITE_ROOT, clean))          ||
    fs.existsSync(path.join(SITE_ROOT, clean + '.html'))||
    fs.existsSync(path.join(SITE_ROOT, clean, 'index.html'))
  );
}

const ASSET_EXTS = /\.(css|js|png|jpg|jpeg|webp|svg|ico|woff|woff2|pdf)(\?|$)/i;

function extractInternalLinks(html) {
  const links = [];
  const re = /href="(\/[^"#?]*)(?:#([^"]*))?"[^>]*>/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    if (ASSET_EXTS.test(m[1])) continue;
    links.push({ path: m[1], anchor: m[2] || null, raw: m[0] });
  }
  return links;
}

function extractAnchors(html) {
  const anchors = new Set();
  const re = /\bid="([^"]+)"/g;
  let m;
  while ((m = re.exec(html)) !== null) anchors.add(m[1]);
  return anchors;
}

function stripLinkedText(html) {
  return html.replace(/<a\s[^>]*>[\s\S]*?<\/a>/gi, ' ');
}

function stripTags(html) {
  return html.replace(/<[^>]+>/g, ' ');
}

function getFooterBottom(html) {
  const m = html.match(/<div class="footer-bottom">[^<]*<\/div>/);
  return m ? m[0] : '';
}

// ─── load all pages ─────────────────────────────────────────────────────────

const pages = {};
for (const p of MAP.pages) {
  const html = readFile(p.file);
  pages[p.path] = { ...p, html, exists: html !== null };
}

// load glosario anchors once (from built output)
const glosarioHtml   = readFile('glosario/index.html') || '';
const glosarioAnchors = extractAnchors(glosarioHtml);

// ─── build incoming link index ───────────────────────────────────────────────

const incomingLinks = {};
for (const p of MAP.pages) incomingLinks[p.path] = [];

for (const [fromPath, page] of Object.entries(pages)) {
  if (!page.html) continue;
  const links = extractInternalLinks(page.html);
  for (const link of links) {
    const normalized = link.path.endsWith('/') ? link.path : link.path + '/';
    if (incomingLinks[normalized] !== undefined && normalized !== fromPath) {
      incomingLinks[normalized].push(fromPath);
    }
  }
}

// ─── run checks ─────────────────────────────────────────────────────────────

const errors   = [];
const warnings = [];

function error(page, msg)   { errors.push(`  ✗ [${page}] ${msg}`); }
function warn(page, msg)    { warnings.push(`  ⚠ [${page}] ${msg}`); }

for (const [pagePath, page] of Object.entries(pages)) {

  if (!page.exists) {
    error(pagePath, `Archivo no encontrado: ${page.file}`);
    continue;
  }

  const html = page.html;

  // 1. Integridad de links internos
  const links = extractInternalLinks(html);
  const seen  = new Set();
  for (const link of links) {
    const key = link.path + (link.anchor ? '#' + link.anchor : '');
    if (seen.has(key)) continue;
    seen.add(key);

    if (!fileExistsForPath(link.path)) {
      error(pagePath, `Link roto → ${link.path}`);
      continue;
    }

    // 2. Integridad de anchors en glosario
    if (link.path === '/glosario/' && link.anchor) {
      if (!glosarioAnchors.has(link.anchor)) {
        error(pagePath, `Anchor inexistente en glosario → #${link.anchor}`);
      }
    }
  }

  // 3. Cobertura del glosario (solo en páginas que no son el glosario mismo)
  if (pagePath !== '/glosario/') {
    const stripped = stripLinkedText(html);
    const text     = stripTags(stripped);

    for (const [termId, term] of Object.entries(MAP.glosario_terms)) {
      for (const pattern of term.patterns) {
        // skip very generic patterns (GPR aparece en casi todo, no lo auditamos como término sin link)
        if (pattern === 'GPR') continue;
        const re = new RegExp(`\\b${pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i');
        if (re.test(text)) {
          // check if it's already linked somewhere in the original html
          const linkedRe = new RegExp(
            `href="/glosario/${term.anchor.replace('#', '')}|href="/glosario/"\\s*[^>]*>[^<]*${pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`,
            'i'
          );
          const anchorRe = new RegExp(`href="/glosario/${term.anchor}"`, 'i');
          if (!anchorRe.test(html)) {
            warn(pagePath, `Término "${pattern}" usado sin link al glosario → /glosario/${term.anchor}`);
          }
          break; // un aviso por término es suficiente
        }
      }
    }
  }

  // 4. Links entrantes
  const minLinks = MAP.min_incoming_links.exceptions?.includes(pagePath)
    ? 0
    : (MAP.min_incoming_links.default || 2);

  const incoming = [...new Set(incomingLinks[pagePath] || [])];
  if (incoming.length < minLinks) {
    warn(pagePath, `Solo ${incoming.length} link(s) entrante(s) (mínimo ${minLinks})`);
  }

  // 5. Footer-bottom relevante
  if (page.footer_keyword) {
    const footer = getFooterBottom(html);
    if (footer && !footer.toLowerCase().includes(page.footer_keyword.toLowerCase())) {
      warn(pagePath, `Footer-bottom no menciona "${page.footer_keyword}" → ${footer.replace(/<[^>]+>/g, '').trim()}`);
    }
  }
}

// 6. Conexiones requeridas
for (const conn of MAP.required_connections) {
  const page = pages[conn.from];
  if (!page || !page.html) continue;
  const links = extractInternalLinks(page.html);
  const toNormalized = conn.to.endsWith('/') ? conn.to : conn.to + '/';
  const found = links.some(l => {
    const n = l.path.endsWith('/') ? l.path : l.path + '/';
    return n === toNormalized || (conn.to.includes('#') && l.path + '#' + l.anchor === conn.to);
  });
  if (!found) {
    warn(conn.from, `Conexión requerida faltante → ${conn.to} (${conn.note})`);
  }
}

// ─── report ─────────────────────────────────────────────────────────────────

const totalPages = MAP.pages.length;
const date = new Date().toISOString().slice(0, 10);

console.log(`\n━━━ Auditoría georadar.cl · ${date} ━━━`);
console.log(`Páginas auditadas: ${totalPages}\n`);

if (errors.length === 0 && warnings.length === 0) {
  console.log('✓ Sin problemas detectados.\n');
  process.exit(0);
}

if (errors.length > 0) {
  console.log(`ERRORES (${errors.length}) — bloquean commit en modo --strict:`);
  errors.forEach(e => console.log(e));
  console.log('');
}

if (warnings.length > 0) {
  console.log(`ADVERTENCIAS (${warnings.length}) — no bloquean commit:`);
  warnings.forEach(w => console.log(w));
  console.log('');
}

console.log(`Resumen: ${errors.length} error(es), ${warnings.length} advertencia(s)\n`);

if (STRICT && errors.length > 0) process.exit(1);
process.exit(0);
