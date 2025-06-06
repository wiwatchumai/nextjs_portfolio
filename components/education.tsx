"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen } from "lucide-react"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Education data
  const education = [
    {
      degree: "Bachelor of Engineering",
      institution: "Kyushu University (IUPE)",
      period: "2025 - Present",
      description:
        "Kyushu University offers international undergraduate programs, including Mechanical and Aerospace Engineering, providing high-quality education in a small, interactive class environment. These programs offer research opportunities with leading scientists at advanced research facilities, fostering a global perspective among students.",
      courses: ["Mechanical and Aerospace Engineering"],
      achievements: ["Monbukagakusho Scholarship (MEXT 2025) awarded international students"],
    },
    {
      degree: "High School Diploma",
      institution: "Royal English Programme School",
      period: "2013 - 2025",
      description: "Focusing on providing students' academics in bilingual",
      courses: ["Science and Mathematics Programme"],
      achievements: ["Graduated"],
    },
  ]

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl silver-gradient">Education</h2>
          <div className="h-[1px] w-20 bg-white/30 mt-4 mx-auto"></div>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">My academic journey and educational background</p>
        </motion.div>

        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border border-white/10 bg-black/40">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4">
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap className="h-5 w-5 text-white/80" />
                        <span className="font-semibold text-white/80">{item.period}</span>
                      </div>
                      <h3 className="text-xl silver-gradient">{item.degree}</h3>
                      <p className="text-white/60">{item.institution}</p>
                    </div>

                    <div className="md:w-3/4 space-y-4">
                      <p className="text-white/70">{item.description}</p>

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <BookOpen className="h-4 w-4 text-white/80" />
                          <h4 className="font-semibold text-white/90">Key Courses</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.courses.map((course, i) => (
                            <Badge key={i} variant="secondary" className="bg-white/10 text-white/80 hover:bg-white/15">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {item.achievements && item.achievements.length > 0 && (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Award className="h-4 w-4 text-white/80" />
                            <h4 className="font-semibold text-white/90">Achievements</h4>
                          </div>
                          <ul className="list-disc list-inside text-white/60">
                            {item.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
