import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image' // <--- 1. ADD THIS IMPORT

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1]
      }
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  }

  const linkVariants = {
    closed: { y: 50, opacity: 0 },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1]
      }
    })
  }

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-40 px-4 md:px-8 flex justify-center">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl shadow-lg">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50 relative flex-shrink-0">
            <div className="w-10 h-10 md:w-8 md:h-8 rounded-full flex items-center justify-center flex-shrink-0">
              {/* 2. FIXED SYNTAX ERROR BELOW (Removed extra < and >) */}
              <Image src="/icon.png" alt="Logo" width={50} height={50} />
            </div>
            <span className="font-mono text-sm font-bold tracking-widest text-[#193354] hidden md:block">
              PARIKH RENEWABLE
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['About', 'Services', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="font-mono text-xs font-bold text-zinc-700 hover:text-[#193354] transition-colors uppercase tracking-wider"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-[#193354] text-white px-5 py-2 rounded-full font-mono text-xs font-bold hover:bg-[#F0B448] hover:text-[#193354] transition-colors flex items-center gap-2"
            >
              GET QUOTE <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50 relative w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#193354]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Full Screen Mobile Menu (Curtain) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-zinc-950/95 backdrop-blur-md z-40 flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center gap-8">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item, i) => (
                <motion.div
                  key={item}
                  custom={i}
                  variants={linkVariants}
                >
                  <Link
                    href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl md:text-6xl font-bold text-white hover:text-[#F0B448] transition-colors tracking-tighter"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                custom={5}
                variants={linkVariants}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-[#F0B448] text-[#193354] px-8 py-4 rounded-full font-mono text-sm font-bold flex items-center gap-2"
                >
                  GET A QUOTE <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}