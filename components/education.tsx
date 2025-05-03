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

  const education = [
    {
      degree: "Bachelor of Engineering",
      institution: "Kyushu University (IUPE)",
      period: "2025 - Present",
      description:
        "Kyushu University offers international undergraduate programs, including Mechanical and Aerospace Engineering, providing high-quality education in a small, interactive class environment. These programs offer research opportunities with leading scientists at advanced research facilities, fostering a global perspective among students.",
      courses: ["Mechanical and Aerospace Engineering"],
      achievements: ["Ongoing"], // Added achievements array
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
          <h2 className="text-3xl font-bold">Education</h2>
          <div className="h-1 w-20 bg-primary mt-4 mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">My academic journey and educational background</p>
        </motion.div>

        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border border-muted">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4">
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        <span className="font-semibold">{item.period}</span>
                      </div>
                      <h3 className="text-xl font-bold">{item.degree}</h3>
                      <p className="text-muted-foreground">{item.institution}</p>
                    </div>

                    <div className="md:w-3/4 space-y-4">
                      <p>{item.description}</p>

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <BookOpen className="h-4 w-4 text-primary" />
                          <h4 className="font-semibold">Key Courses</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.courses.map((course, i) => (
                            <Badge key={i} variant="secondary">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Add conditional check for achievements */}
                      {item.achievements && item.achievements.length > 0 && (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Award className="h-4 w-4 text-primary" />
                            <h4 className="font-semibold">Achievements</h4>
                          </div>
                          <ul className="list-disc list-inside text-muted-foreground">
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
