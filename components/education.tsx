"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { t, language } = useLanguage()

  // Education data with translations
  const education = [
    {
      degree: {
        en: "Bachelor of Engineering",
        ja: "工学学士",
        de: "Bachelor of Engineering",
      },
      institution: {
        en: "Kyushu University (IUPE)",
        ja: "九州大学 (IUPE)",
        de: "Kyushu Universität (IUPE)",
      },
      period: "2025 - Present",
      description: {
        en: "Kyushu University offers international undergraduate programs, including Mechanical and Aerospace Engineering, providing high-quality education in a small, interactive class environment. These programs offer research opportunities with leading scientists at advanced research facilities, fostering a global perspective among students.",
        ja: "九州大学は、機械・航空宇宙工学を含む国際学部プログラムを提供し、少人数の対話型クラス環境で質の高い教育を提供しています。これらのプログラムは、先進的な研究施設で一流の科学者との研究機会を提供し、学生間のグローバルな視点を育成しています。",
        de: "Die Kyushu Universität bietet internationale Bachelor-Programme an, darunter Maschinenbau und Luft- und Raumfahrttechnik, und bietet hochwertige Bildung in einer kleinen, interaktiven Klassenumgebung. Diese Programme bieten Forschungsmöglichkeiten mit führenden Wissenschaftlern in fortschrittlichen Forschungseinrichtungen und fördern eine globale Perspektive unter den Studenten.",
      },
      courses: [
        {
          en: "Mechanical and Aerospace Engineering",
          ja: "機械・航空宇宙工学",
          de: "Maschinenbau und Luft- und Raumfahrttechnik",
        },
      ],
      achievements: [
        {
          en: "Monbukagakusho Scholarship (MEXT 2025) awarded international students",
          ja: "文部科学省奨学金（MEXT 2025）留学生に授与",
          de: "Monbukagakusho-Stipendium (MEXT 2025) für internationale Studierende",
        },
      ],
    },
    {
      degree: {
        en: "High School Diploma",
        ja: "高等学校卒業証書",
        de: "Abitur",
      },
      institution: {
        en: "Royal English Programme School",
        ja: "ロイヤル・イングリッシュ・プログラム・スクール",
        de: "Royal English Programme School",
      },
      period: "2013 - 2025",
      description: {
        en: "Focusing on providing students' academics in bilingual",
        ja: "バイリンガルでの学生の学業提供に焦点を当てています",
        de: "Fokussiert auf die Bereitstellung von akademischer Bildung für Schüler in zweisprachiger Form",
      },
      courses: [
        {
          en: "Science and Mathematics Programme",
          ja: "理数系プログラム",
          de: "Naturwissenschaftliches und Mathematisches Programm",
        },
      ],
      achievements: [
        {
          en: "Graduated",
          ja: "卒業",
          de: "Abgeschlossen",
        },
      ],
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
          <h2 className="text-3xl font-bold">{t("education.title")}</h2>
          <div className="h-1 w-20 bg-primary mt-4 mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{t("education.subtitle")}</p>
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
                      <h3 className="text-xl font-bold">{item.degree[language]}</h3>
                      <p className="text-muted-foreground">{item.institution[language]}</p>
                    </div>

                    <div className="md:w-3/4 space-y-4">
                      <p>{item.description[language]}</p>

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <BookOpen className="h-4 w-4 text-primary" />
                          <h4 className="font-semibold">{t("education.courses")}</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.courses.map((course, i) => (
                            <Badge key={i} variant="secondary">
                              {course[language]}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {item.achievements && item.achievements.length > 0 && (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Award className="h-4 w-4 text-primary" />
                            <h4 className="font-semibold">{t("education.achievements")}</h4>
                          </div>
                          <ul className="list-disc list-inside text-muted-foreground">
                            {item.achievements.map((achievement, i) => (
                              <li key={i}>{achievement[language]}</li>
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
