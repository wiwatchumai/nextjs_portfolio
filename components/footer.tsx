"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"
import { Logo } from "./logo"
import { OscillixText } from "./oscillix-text"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black/60 text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Logo className="w-6 h-6" />
            <OscillixText size="sm" />
          </div>

          <div className="flex space-x-6">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-white/60 hover:text-white/90 transition-colors" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-white/60 hover:text-white/90 transition-colors" />
            </Link>
            <Link
              href="https://www.instagram.com/feuzzy_field/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 text-white/60 hover:text-white/90 transition-colors" />
            </Link>
            <Link href="mailto:wiwatchumai@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5 text-white/60 hover:text-white/90 transition-colors" />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/60 font-sans">
            © {currentYear} "Every Move Creates an Impact" -Wiwat Chumai.
          </p>
          <p className="text-xs text-white/40 mt-2 font-sans">Made with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
