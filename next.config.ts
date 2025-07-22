import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: '/curriculum-clicker',
  basePath: '/curriculum-clicker',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
