import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const linkClass = (href: string) =>
    `px-4 py-2 text-sm ${pathname === href ? 'text-[#F0B448]' : 'text-white'} transition`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#193354] to-[#1a3d5e]">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Left Logo and Time Info */}
        <div className="flex items-center gap-6">
          <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center overflow-hidden bg-white">
            <Image src="/icon.png" alt="Parikh Renewable Logo" width={40} height={40} className="object-cover" />
          </div>
          <span className="text-white text-sm font-medium">PARIKH RENEWABLE</span>
        </div>

        {/* Center Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <a href="/" className={linkClass('/')}>
            Home
          </a>
          <a href="/about" className={linkClass('/about')}>About Us</a>
          <a href="/services" className={linkClass('/services')}>Services</a>
          <a href="/projects" className={linkClass('/projects')}>Projects</a>
          <a href="/contact" className={linkClass('/contact')}>Contact</a>
        </nav>

        {/* Right Register and Search */}
        <div className="flex items-center gap-4">
          <a href="/contact" className="text-white text-sm font-medium hover:text-[#F0B448] transition underline">
            Get Quote <span className="text-xs">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
