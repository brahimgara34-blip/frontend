import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    const backendUrl =
      process.env.INTERNAL_BACKEND_URL ||
      process.env.NEXT_PUBLIC_API_URL ||
      process.env.BACKEND_URL ||
      "http://localhost:8000";

    return [
      {
        source: "/api/v1/:path*",
        destination: `${backendUrl.replace(/\/+$/, '')}/api/v1/:path*`,
      },
      {
        source: "/api/proxy/:path*",
        destination: `${backendUrl.replace(/\/+$/, '')}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
