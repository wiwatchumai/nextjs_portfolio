"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Instagram, Lightbulb } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="bg-muted/30 py-12 border-t border-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            <span className="font-bold">
              <span className="text-primary">WIWAT</span>ME.Student
            </span>
          </div>

          <div className="flex space-x-6">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link
              href="https://www.instagram.com/feuzzy_field/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href="mailto:wiwatchumai@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-muted text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} "{t("footer.copyright")}" -Wiwat Chumai.
          </p>
          <p className="text-xs text-muted-foreground mt-2">{t("footer.madewith")}</p>
        </div>
      </div>
    </footer>
  )
}
