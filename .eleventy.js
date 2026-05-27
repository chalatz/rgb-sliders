// npx @11ty/eleventy --serve
// npm run sass:watch

// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  // Watch SCSS for changes
  eleventyConfig.addWatchTarget("./assets/scss/**/*.scss");
  
  // Passthrough copy
  eleventyConfig.addPassthroughCopy("assets/css/styles.css");
  eleventyConfig.addPassthroughCopy("assets/js/scripts.js");
  eleventyConfig.addPassthroughCopy("assets/images/**/*");
};