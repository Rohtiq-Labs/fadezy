import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      // If project thumbnails live in public/projectThumbnail/ instead of public/assets/projectThumbnail/,
      // this serves them for requests to /assets/projectThumbnail/*
      { source: "/assets/projectThumbnail/:path*", destination: "/projectThumbnail/:path*" },
    ];
  },
};

export default nextConfig;
