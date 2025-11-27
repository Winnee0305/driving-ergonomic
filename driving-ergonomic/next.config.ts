import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    allowedDevOrigins: [
      'http://172.18.123.58:3000', // whatever IP/domain you're testing from
    ],
  },
};

export default nextConfig;
