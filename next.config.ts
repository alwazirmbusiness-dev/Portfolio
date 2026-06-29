import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Leave turbopack root unset to avoid conflicts with outputFileTracingRoot
};

export default nextConfig;
