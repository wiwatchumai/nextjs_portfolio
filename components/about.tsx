"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FileText, MapPin, Mail } from "lucide-react"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="h-1 w-20 bg-primary mt-4 mx-auto"></div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold">Mechanical and Aerospace Engineering Student</h3>
            <div className="h-1 w-20 bg-primary mt-2 mb-4 mx-auto"></div>
          </div>

          <p className="text-muted-foreground text-center">
            I'm an engineering student at Kyushu University (IUPE), who passionate about Computer Aided Engineering and
            Vibration Analysis.
          </p>

          <p className="text-muted-foreground text-center">
            My academic journey has focused on Computer Aided Design, Finite Element Analysis, and Structural Dynamics.
            I hope these passion would integrated in further engineering advancements, enhance energy production
            efficiency and sustainability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 text-sm max-w-md mx-auto">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-muted-foreground">Fukuoka, Japan</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-muted-foreground">wiwatchumai@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-center">
            <Button asChild className="rounded-md" variant="outline">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Download CV</span>
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
