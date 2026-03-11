import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/db", "@repo/ui", "@repo/utils"],
  serverExternalPackages: ["@prisma/client"],
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Only run ESLint on non-production builds
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
