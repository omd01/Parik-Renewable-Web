'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

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
              <Image src="/icon.png" alt="Logo" width={50} height={50} />
            </div>
            <span className="font-mono text-sm font-bold tracking-widest text-[#193354] hidden md:block">
              PARIKH RENEWABLE
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className="font-mono text-xs font-bold text-zinc-700 hover:text-[#193354] transition-colors uppercase tracking-wider"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 font-mono text-xs font-bold text-zinc-700 hover:text-[#193354] transition-colors uppercase tracking-wider py-2">
                Services <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                  <Link href="/services" className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-[#193354] transition-colors border-b border-gray-50">
                    Solar Services
                  </Link>
                  <Link href="/services/electric" className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-[#193354] transition-colors border-b border-gray-50">
                    Electric Services
                  </Link>
                  <Link href="/services/trading" className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-[#193354] transition-colors">
                    Material Trading
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/projects"
              className="font-mono text-xs font-bold text-zinc-700 hover:text-[#193354] transition-colors uppercase tracking-wider"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="font-mono text-xs font-bold text-zinc-700 hover:text-[#193354] transition-colors uppercase tracking-wider"
            >
              Contact
            </Link>
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
            className="fixed inset-0 bg-zinc-950/95 backdrop-blur-md z-40 flex flex-col justify-center items-center overflow-y-auto"
          >
            <div className="flex flex-col items-center gap-6 py-10">
              <motion.div variants={linkVariants} custom={0}>
                <Link href="/" onClick={() => setIsOpen(false)} className="text-4xl font-bold text-white hover:text-[#F0B448] transition-colors tracking-tighter">
                  Home
                </Link>
              </motion.div>

              <motion.div variants={linkVariants} custom={1}>
                <Link href="/about" onClick={() => setIsOpen(false)} className="text-4xl font-bold text-white hover:text-[#F0B448] transition-colors tracking-tighter">
                  About
                </Link>
              </motion.div>

              <motion.div variants={linkVariants} custom={2} className="flex flex-col items-center w-full">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="text-4xl font-bold text-white hover:text-[#F0B448] transition-colors tracking-tighter flex items-center gap-2"
                >
                  Services <ChevronDown className={`w-6 h-6 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col items-center gap-4 mt-4 bg-white/5 rounded-xl w-full px-8 py-4"
                    >
                      <Link href="/services" onClick={() => setIsOpen(false)} className="text-xl text-gray-300 hover:text-white">Solar Services</Link>
                      <Link href="/services/electric" onClick={() => setIsOpen(false)} className="text-xl text-gray-300 hover:text-white">Electric Services</Link>
                      <Link href="/services/trading" onClick={() => setIsOpen(false)} className="text-xl text-gray-300 hover:text-white">Material Trading</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div variants={linkVariants} custom={3}>
                <Link href="/projects" onClick={() => setIsOpen(false)} className="text-4xl font-bold text-white hover:text-[#F0B448] transition-colors tracking-tighter">
                  Projects
                </Link>
              </motion.div>

              <motion.div variants={linkVariants} custom={4}>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="text-4xl font-bold text-white hover:text-[#F0B448] transition-colors tracking-tighter">
                  Contact
                </Link>
              </motion.div>

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