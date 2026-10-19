const {chromium} = require('playwright');
const fs = require('fs');
const path = require('path');
const assert = require('assert/strict');
(async()=>{
 const browser=await chromium.launch({headless:true,channel:"chrome"});
 const page=await browser.newPage({viewport:{width:1600,height:1100},deviceScaleFactor:2});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const base=process.env.MONITOR_URL||'http://localhost:8765/herramientas/monitor-gpr-avo1/';
 await page.goto(base);await page.waitForSelector('.anom');await page.evaluate(()=>document.fonts.ready);
 assert.equal(await page.locator('meta[name="robots"]').getAttribute('content'),'noindex, nofollow');
 assert.equal(await page.locator('.anom').count(),8);
 assert.equal(await page.locator('#history tr').count(),8);
 for(let i=0;i<8;i++){await page.locator('.anom').nth(i).click();assert.equal(await page.locator('.anom').nth(i).getAttribute('aria-pressed'),'true');assert.ok((await page.locator('#status').innerText()).length>0);}
 for(const value of ['0','1','2']){await page.selectOption('#radarSel',value);await page.waitForFunction(()=>{const img=document.getElementById('radarImg');return img.complete&&img.naturalWidth>0});}
 await page.locator('#history button').nth(3).click();assert.match(await page.locator('#id').innerText(),/0182/);
 await page.waitForFunction(()=>[...document.images].every(i=>i.complete&&i.naturalWidth>0));
 for(const width of [1600,1280,820,390]){await page.setViewportSize({width,height:1100});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Horizontal overflow at ${width}`);}
 await page.setViewportSize({width:1600,height:1100});
 const out=path.resolve('output/monitor-gpr-avo1');fs.mkdirSync(out,{recursive:true});
 async function region(name,selectors){const boxes=await Promise.all(selectors.map(s=>page.locator(s).boundingBox()));const x=Math.min(...boxes.map(b=>b.x)),y=Math.min(...boxes.map(b=>b.y));const right=Math.max(...boxes.map(b=>b.x+b.width)),bottom=Math.max(...boxes.map(b=>b.y+b.height));await page.screenshot({path:path.join(out,name),fullPage:true,clip:{x:x-12,y:y-12,width:right-x+24,height:bottom-y+24}});}
 await page.evaluate(()=>scrollTo(0,0));
 await region('01-dashboard-longitudinal.png',['#dashboard','#longitudinal']);
 await region('02-comparador-temporal.png',['#temporal']);
 await region('03-ficha-radargrama.png',['#longitudinal','#radargram']);
 assert.deepEqual(errors,[]);
 console.log(JSON.stringify({url:base,anomalies:8,radargrams:3,responsive:[1600,1280,820,390],errors,captures:out},null,2));
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});


