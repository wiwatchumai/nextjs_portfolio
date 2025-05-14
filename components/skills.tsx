"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

type Skill = {
  name: {
    en: string
    ja: string
    de: string
  }
  level: number
}

type SkillCategory = {
  title: {
    en: string
    ja: string
    de: string
  }
  skills: Skill[]
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { t, language } = useLanguage()

  const skillCategories: SkillCategory[] = [
    {
      title: {
        en: "Technical Skills",
        ja: "技術的スキル",
        de: "Technische Fähigkeiten",
      },
      skills: [
        {
          name: {
            en: "Computer Aided Design",
            ja: "コンピュータ支援設計",
            de: "Computer-Aided Design",
          },
          level: 90,
        },
        {
          name: {
            en: "Finite Element Analysis",
            ja: "有限要素解析",
            de: "Finite-Elemente-Analyse",
          },
          level: 90,
        },
        {
          name: {
            en: "Mathematical Modelling",
            ja: "数学的モデリング",
            de: "Mathematische Modellierung",
          },
          level: 90,
        },
        {
          name: {
            en: "Python Programming",
            ja: "Pythonプログラミング",
            de: "Python-Programmierung",
          },
          level: 85,
        },
        {
          name: {
            en: "Research Skills",
            ja: "研究スキル",
            de: "Forschungsfähigkeiten",
          },
          level: 90,
        },
      ],
    },
    {
      title: {
        en: "Passionate Engineering Skills",
        ja: "情熱的なエンジニアリングスキル",
        de: "Leidenschaftliche Ingenieursfähigkeiten",
      },
      skills: [
        {
          name: {
            en: "Machine Dynamics",
            ja: "機械力学",
            de: "Maschinendynamik",
          },
          level: 90,
        },
        {
          name: {
            en: "Vibration Analysis",
            ja: "振動解析",
            de: "Schwingungsanalyse",
          },
          level: 90,
        },
        {
          name: {
            en: "Structural Dynamics Analysis",
            ja: "構造動力学解析",
            de: "Strukturdynamische Analyse",
          },
          level: 90,
        },
        {
          name: {
            en: "Machine Design",
            ja: "機械設計",
            de: "Maschinendesign",
          },
          level: 85,
        },
        {
          name: {
            en: "Rotor Dynamics",
            ja: "ロータ力学",
            de: "Rotordynamik",
          },
          level: 80,
        },
      ],
    },
    {
      title: {
        en: "Software & Tools",
        ja: "ソフトウェア＆ツール",
        de: "Software & Werkzeuge",
      },
      skills: [
        {
          name: {
            en: "FreeCAD",
            ja: "FreeCAD",
            de: "FreeCAD",
          },
          level: 85,
        },
        {
          name: {
            en: "MATLAB",
            ja: "MATLAB",
            de: "MATLAB",
          },
          level: 75,
        },
        {
          name: {
            en: "Mathematica",
            ja: "Mathematica",
            de: "Mathematica",
          },
          level: 70,
        },
        {
          name: {
            en: "Python",
            ja: "Python",
            de: "Python",
          },
          level: 65,
        },
        {
          name: {
            en: "CalculiX",
            ja: "CalculiX",
            de: "CalculiX",
          },
          level: 90,
        },
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
          <h2 className="text-3xl font-bold">{t("skills.title")}</h2>
          <div className="h-1 w-20 bg-primary mt-4 mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{t("skills.subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title.en}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{category.title[language]}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name.en}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="space-y-2"
                      >
                        <div>
                          <span className="font-medium">{skill.name[language]}</span>
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
