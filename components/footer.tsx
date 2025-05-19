"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Instagram, Lightbulb } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-white" />
            <span className="font-bold">
              <span className="text-white">WIWAT</span>ME.Student
            </span>
          </div>

          <div className="flex space-x-6">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-white hover:text-white/80 transition-colors" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-white hover:text-white/80 transition-colors" />
            </Link>
            <Link
              href="https://www.instagram.com/feuzzy_field/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 text-white hover:text-white/80 transition-colors" />
            </Link>
            <Link href="mailto:wiwatchumai@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5 text-white hover:text-white/80 transition-colors" />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-sm text-white/80">© {currentYear} "Every Move Creates an Impact" -Wiwat Chumai.</p>
          <p className="text-xs text-white/60 mt-2">Made with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
