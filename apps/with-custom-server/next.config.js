const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    // Recommended for new `<Link>` and `<Image>` behavior
    // Enables `<Link>` without `<a>`. When migrating an existing app use the codemod as outlined here: https://github.com/vercel/next.js/pull/36436
    newNextLinkBehavior: true,
    // Change the default compilation output to ESModules compatible browsers
    legacyBrowsers: false,
  },
};

module.exports = withVanillaExtract(nextConfig);
