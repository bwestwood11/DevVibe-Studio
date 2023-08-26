/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/bwestwood11/marketing-blog-posts/main/images/**',
              }
        ]
    }
}

module.exports = nextConfig
