"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MapPin, Mail } from "lucide-react"

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
          <h2 className="text-3xl">About Me</h2>
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
            <h3 className="text-2xl">Mechanical and Aerospace Engineering Student</h3>
            <div className="h-1 w-20 bg-primary mt-2 mb-4 mx-auto"></div>
          </div>

          <p className="text-muted-foreground" style={{ textAlign: "justify" }}>
            I'm an engineering student at Kyushu University (IUPE) with a passion for structural dynamics and vibration
            analysis. My academic journey began at age 14, when I discovered Computer-Aided Design (CAD) through tools
            like FreeCAD. I was immediately drawn to the precision, scalability, and creative potential CAD
            offers—especially in the field of engineering.
          </p>

          <p className="text-muted-foreground" style={{ textAlign: "justify" }}>
            My interest deepened during my participation in the Physics Olympiad, where I developed a strong enthusiasm
            for mechanics and logical problem-solving. This led me to explore how computational tools and CAD skills
            could be combined to solve complex mechanical problems using methods like the Finite Element Method (FEM).
          </p>

          <p className="text-muted-foreground" style={{ textAlign: "justify" }}>
            I'm particularly driven by the often-overlooked importance of structural dynamics in modern engineering
            design. Neglecting dynamic behavior in structures can lead to critical issues in real-world applications.
            That's why I'm passionate about advancing tools and technologies that help engineers better understand and
            integrate dynamic analysis into their designs—especially in energy systems and upstream machinery.
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
        </motion.div>
      </div>
    </section>
  )
}
