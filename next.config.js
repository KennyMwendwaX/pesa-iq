/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: [
    //   "lh3.googleusercontent.com",
    //   "avatars.githubusercontent.com",
    //   "cdn.coinranking.com",
    // ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.coinranking.com",
      },
    ],
  },
};

module.exports = nextConfig;
