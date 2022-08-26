const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverComponents: true,
    // Recommended for new `<Link>` and `<Image>` behavior
    // Enables `<Link>` without `<a>`. When migrating an existing app use the codemod as outlined here: https://github.com/vercel/next.js/pull/36436
    newNextLinkBehavior: true,
    // Enables `next/future/image`
    images: {
      allowFutureImage: true,
    },
    // Recommended, will be the default in the next major version:
    // Enable browserslist handling, which is required for legacyBrowsers: false
    browsersListForSwc: true,
    // Change the default compilation output to ESModules compatible browsers
    legacyBrowsers: false,
  },
};

module.exports = withVanillaExtract(nextConfig);
