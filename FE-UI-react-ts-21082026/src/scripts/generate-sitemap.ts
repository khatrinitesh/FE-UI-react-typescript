const generateSitemap = require("react-router-sitemap-generator");

const routes = [
  "/",
  "/about",
  "/skills",
  "/experience",
  "/projects",
  "/contact",
];

generateSitemap({
  baseUrl: "https://yourwebsite.com",
  routes,
  outDir: "./public",
});
