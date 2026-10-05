// // next.config.js
// /** @type {import('next').NextConfig} */
// const nextConfig = {
 
// };

// module.exports = nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;