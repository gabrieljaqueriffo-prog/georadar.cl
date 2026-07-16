module.exports = function(eleventyConfig) {
  // Copiar activos estáticos sin procesar
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("favicon.svg");
  eleventyConfig.addPassthroughCopy("favicon.png");
  eleventyConfig.addPassthroughCopy("sitemap.xml");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("404.html");

  // Ignorar directorios que no son contenido del sitio
  eleventyConfig.ignores.add("node_modules/**");
  eleventyConfig.ignores.add("_site/**");
  eleventyConfig.ignores.add("docs/**");
  eleventyConfig.ignores.add("scripts/**");
  eleventyConfig.ignores.add("content/**");
  eleventyConfig.ignores.add("_includes/**");

  return {
    // Procesar archivos HTML con Nunjucks para habilitar {% include %}
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk"],
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
};
