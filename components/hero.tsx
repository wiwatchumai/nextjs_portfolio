"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedLogo } from "./animated-logo"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Return a simple loading state or null during SSR
  if (!mounted) {
    return (
      <section id="home" className="relative min-h-screen flex items-center justify-center py-20">
        <div className="text-center">Loading...</div>
      </section>
    )
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_50%)]"></div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="space-y-12">
            {/* Logo only */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <AnimatedLogo className="w-32 h-32" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-sm text-white/70 mb-4 font-sans tracking-wide">
                MECHANICAL AND AEROSPACE ENGINEERING STUDENT
              </p>
              <h1 className="text-5xl md:text-6xl silver-gradient mb-2">
                Hi, I'm <span className="silver-glow elegant-text block mt-2">Wiwat Chumai</span>
              </h1>
              <div className="h-[1px] w-32 bg-white/30 mt-8 mx-auto"></div>
            </motion.div>

            <motion.p
              className="text-lg text-white/60 mx-auto font-sans leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              "A passionate engineering student at Kyushu University (IUPE), Japan, specializing in structural dynamics
              and vibration analysis using advanced Computer-Aided Engineering (CAE) tools."
            </motion.p>

            <motion.div
              className="flex gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-md border-white/20 bg-transparent hover:bg-white/5"
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5 text-white/80" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-md border-white/20 bg-transparent hover:bg-white/5"
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5 text-white/80" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-md border-white/20 bg-transparent hover:bg-white/5"
              >
                <a href="mailto:wiwatchumai@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5 text-white/80" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <Button
                asChild
                className="rounded-none bg-transparent hover:bg-white/5 border border-white/20 text-white font-sans tracking-wide"
                variant="outline"
              >
                <a href="#about" className="flex items-center gap-2">
                  LEARN MORE <ArrowDown className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
