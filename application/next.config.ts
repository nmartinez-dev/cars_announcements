import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'arvaluateuwsa.blob.core.windows.net',
        pathname: '/arval-uat-euw-blobcontainer-images/**',
      },
    ],
  },
};

export default nextConfig;
