/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "ipfs.io", "gateway.pinata.cloud"],
  },
};

module.exports = nextConfig;
