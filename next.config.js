/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: "custom",
    loaderFile: "./loader.js",
    unoptimized: true,
  },
  reactStrictMode: true,
};
