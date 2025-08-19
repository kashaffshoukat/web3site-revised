/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // 👇 add all external domains you load images from
    domains: ["res.cloudinary.com", "ipfs.io", "gateway.pinata.cloud"],
    // If your images are only in /public, you don’t need this
  },
}

module.exports = nextConfig
