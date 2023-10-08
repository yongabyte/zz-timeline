/** @type {import('next').NextConfig} */

const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
let assetPrefix = `/${repo}/`;
// let basePath = `/${repo}`;
const nextConfig = {
  assetPrefix,
  basePath: assetPrefix,
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
