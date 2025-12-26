import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white flex flex-col justify-center items-center p-6 text-center">
            <div className="space-y-6 max-w-lg">
                <h2 className="text-[10rem] font-bold leading-none text-zinc-900 select-none">404</h2>
                <h1 className="text-4xl font-bold tracking-tight">Page Not Found</h1>
                <p className="text-zinc-500 text-lg">
                    The page you are looking for doesn't exist or has been moved.
                </p>
                <div className="pt-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-zinc-300 hover:text-[#F0B448] transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    )
}
