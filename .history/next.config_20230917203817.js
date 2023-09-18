/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http*",
        hostname: "**",
      }
    ],
  },
}

module.exports = nextConfig
