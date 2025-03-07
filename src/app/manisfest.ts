import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Schedify',
        short_name: 'Schedify',
        description: 'A Progressive Web App built with Next.js',
        start_url: '/',
        display: 'standalone',
        orientation: "any",
        scope: "/",
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            {
                src: "icons/yaochai-192.png",
                type: "image/png",
                sizes: "192x192"
            },
            {
                src: "icons/yaochai-256.png",
                type: "image/png",
                sizes: "256x256"
            },
            {
                src: "icons/yaochai-512.png",
                type: "image/png",
                sizes: "512x512"
            }
        ],
    }
}