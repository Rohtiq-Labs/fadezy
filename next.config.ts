import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // If project thumbnails live in public/projectThumbnail/ instead of public/assets/projectThumbnail/,
      // this serves them for requests to /assets/projectThumbnail/*
      { source: "/assets/projectThumbnail/:path*", destination: "/projectThumbnail/:path*" },
    ];
  },
};

export default nextConfig;
