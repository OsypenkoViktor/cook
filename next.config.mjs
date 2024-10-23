/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    COOK_NINJA_API_KEY: process.env.COOK_NINJA_API_KEY,
  },
};

export default nextConfig;
