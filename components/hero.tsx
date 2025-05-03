"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--foreground-rgb),0.03),transparent_50%)]"></div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="space-y-6">
            <div>
              <p className="text-sm text-primary mb-2 font-mono">Mechanical and Aerospace Engineering Student</p>
              <h1 className="text-4xl md:text-5xl font-bold">
                Hi, I'm <span className="text-primary">Wiwat Chumai</span>
              </h1>
              <div className="h-1 w-20 bg-primary mt-4 mx-auto"></div>
            </div>

            <p className="text-lg text-muted-foreground mx-auto">
              "A passionate engineering student at Kyushu University (IUPE), Japan, specializing in structural dynamics and vibration analysis using advanced Computer-Aided Engineering (CAE) tools."
            </p>

            <div className="flex gap-4 justify-center">
              <Button asChild variant="outline" size="icon" className="rounded-md">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-md">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-md">
                <a href="mailto:wiwatchumai@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="flex justify-center">
              <Button asChild className="rounded-md" variant="default">
                <a href="#about">
                  Learn more <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
