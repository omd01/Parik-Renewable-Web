import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Solar Services | EPC, O&M, & Electrical Consulting',
    description: 'Comprehensive solar services including Turnkey EPC, Operations & Maintenance (O&M), and Electrical Consulting for industrial and commercial projects.',
}

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
