/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        pathname
        "*"
      }
    ]
  }
}

module.exports = nextConfig
