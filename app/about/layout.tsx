import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Us | Top Solar Installers in Aurangabad',
    description: 'Parikh Renewable is a leading Solar Rooftop EPC company in Aurangabad. Learn about our mission, vision, and commitment to sustainable energy.',
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
