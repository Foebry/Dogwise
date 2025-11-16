import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "res.cloudinary.com" },
      { hostname: "www.payconiq.com" },
    ],
  },
  redirects: async () => {
    return [{ source: "/", destination: "/home", permanent: true }];
  },
  /* config options here */
};

export default nextConfig;
