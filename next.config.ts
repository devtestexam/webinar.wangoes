import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Required for Docker standalone deployment.
  // Only activates during `next build` — does NOT affect `next dev`.
  output: "standalone",
  outputFileTracingRoot: path.resolve(process.cwd()),
};

export default nextConfig;
