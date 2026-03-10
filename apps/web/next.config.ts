import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/db", "@repo/ui", "@repo/utils"],
  serverExternalPackages: ["@prisma/client"]
};

export default nextConfig;
