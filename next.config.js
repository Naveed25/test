/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint:{
    ignoreDruringBuilds: true,
  }
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
