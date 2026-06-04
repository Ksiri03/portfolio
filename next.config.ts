import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable image optimization for when you add photos
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Compress output
  compress: true,
  // Strict mode for better development
  reactStrictMode: true,
};

export default nextConfig;
