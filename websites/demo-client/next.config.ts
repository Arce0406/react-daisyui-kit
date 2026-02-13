import type { NextConfig } from "next";

const basePath = process.env.NODE_ENV === "production" ? "/react-daisyui-kit" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
