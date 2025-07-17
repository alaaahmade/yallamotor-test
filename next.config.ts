import type { NextConfig } from "next";
import createBundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["ymimg1.b8cdn.com", "yallamotor-production-assets.s3.ap-south-1.amazonaws.com", "upload.wikimedia.org"],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
};

export default withBundleAnalyzer(nextConfig);
