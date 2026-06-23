/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // To jest kluczowe dla Cloudflare
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig;
