"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"

type Skill = {
  name: string
  level: number
}

type SkillCategory = {
  title: string
  skills: Skill[]
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories: SkillCategory[] = [
    {
      title: "Technical Skills",
      skills: [
        { name: "Computer Aided Design", level: 90 },
        { name: "Finite Element Analysis", level: 90 },
        { name: "Mathematical Modelling", level: 90 },
        { name: "Python Programming", level: 85 },
        { name: "Research Skills", level: 90 },
      ],
    },
    {
      title: "Passionate Engineering Skills",
      skills: [
        { name: "Machine Dynamics", level: 90 },
        { name: "Vibration Analysis", level: 90 },
        { name: "Structural Dynamics Analysis", level: 90 },
        { name: "Machine Design", level: 85 },
        { name: "Rotor Dynamics", level: 80 },
      ],
    },
    {
      title: "Software & Tools",
      skills: [
        { name: "FreeCAD", level: 85 },
        { name: "MATLAB", level: 75 },
        { name: "Mathematica", level: 70 },
        { name: "Python", level: 65 },
        { name: "CalculiX", level: 90 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Skills</h2>
          <div className="h-1 w-20 bg-primary mt-4 mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Technical skills and knowledge I've developed through my coursework and projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="space-y-2"
                      >
                        <div>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </motion.div>
                    ))}
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
