import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Parikh Renewable',
        short_name: 'Parikh Renewable',
        description: 'Sustainable Energy Solutions - Leading Solar EPC company in Aurangabad & Maharashtra',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#193354',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/icon.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
