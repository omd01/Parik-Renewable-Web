import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Projects | Industrial & Commercial Solar Installations',
    description: 'Explore our portfolio of successful solar rooftop installations across industrial, commercial, and residential sectors in Maharashtra.',
}

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
