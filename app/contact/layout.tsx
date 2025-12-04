import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Us | Solar Installation Inquiry',
    description: 'Get in touch with Parikh Renewable for your solar energy needs. Request a quote or consultation for rooftop solar installation.',
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
