import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/norma-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
