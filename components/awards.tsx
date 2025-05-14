"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, MapPin, Trophy } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

type AwardItem = {
  title: {
    en: string
    ja: string
    de: string
  }
  organization: {
    en: string
    ja: string
    de: string
  }
  date: string
  location: {
    en: string
    ja: string
    de: string
  }
  description?: {
    en: string
    ja: string
    de: string
  }
  category: {
    en: string
    ja: string
    de: string
  }
  achievements: {
    en: string
    ja: string
    de: string
  }[]
}

export default function Awards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { t, language } = useLanguage()

  const awards: AwardItem[] = [
    {
      title: {
        en: "Young Scientist Competition (YSC27th)",
        ja: "ヤングサイエンティスト・コンペティション (YSC27回)",
        de: "Junge Wissenschaftler Wettbewerb (YSC27.)",
      },
      organization: {
        en: "National Science and Technology Development Agency (NSTDA)",
        ja: "国立科学技術開発庁 (NSTDA)",
        de: "Nationale Agentur für Wissenschafts- und Technologieentwicklung (NSTDA)",
      },
      date: "January 2025",
      location: {
        en: "Bangkok, Thailand",
        ja: "バンコク、タイ",
        de: "Bangkok, Thailand",
      },
      category: {
        en: "Physics and Astronomy",
        ja: "物理学と天文学",
        de: "Physik und Astronomie",
      },
      achievements: [
        {
          en: "Gold Medal",
          ja: "金メダル",
          de: "Goldmedaille",
        },
        {
          en: "First Place Award",
          ja: "最優秀賞",
          de: "Erster Platz",
        },
      ],
    },
    {
      title: {
        en: "ASEAN Student Science Fair (ASSF-2024)",
        ja: "ASEAN学生科学フェア (ASSF-2024)",
        de: "ASEAN Schüler-Wissenschaftsmesse (ASSF-2024)",
      },
      organization: {
        en: "Science Association of Indonesia",
        ja: "インドネシア科学協会",
        de: "Wissenschaftsverband Indonesien",
      },
      date: "August 2024",
      location: {
        en: "Online competition",
        ja: "オンラインコンペティション",
        de: "Online-Wettbewerb",
      },
      category: {
        en: "Physics and Astronomy",
        ja: "物理学と天文学",
        de: "Physik und Astronomie",
      },
      achievements: [
        {
          en: "Gold Medal",
          ja: "金メダル",
          de: "Goldmedaille",
        },
        {
          en: "First Place Award",
          ja: "最優秀賞",
          de: "Erster Platz",
        },
      ],
    },
    {
      title: {
        en: "SUT SMILE CYS III national conference on science",
        ja: "SUT SMILE CYS III 科学に関する全国会議",
        de: "SUT SMILE CYS III nationale Wissenschaftskonferenz",
      },
      organization: {
        en: "Suranaree University of Technology",
        ja: "スラナリー工科大学",
        de: "Suranaree Technische Universität",
      },
      date: "August 2024",
      location: {
        en: "Faculty of science, Suranaree University of Technology, Thailand",
        ja: "タイ、スラナリー工科大学、理学部",
        de: "Fakultät für Wissenschaft, Suranaree Technische Universität, Thailand",
      },
      category: {
        en: "Physical science",
        ja: "物理科学",
        de: "Physikalische Wissenschaft",
      },
      achievements: [
        {
          en: "Gold Medal",
          ja: "金メダル",
          de: "Goldmedaille",
        },
        {
          en: "Best Poster Presentation Award",
          ja: "ベストポスター発表賞",
          de: "Beste Posterpräsentation Auszeichnung",
        },
        {
          en: "First Place Award",
          ja: "最優秀賞",
          de: "Erster Platz",
        },
      ],
    },
    {
      title: {
        en: "Jakarta International Science Fair (JISF-2024)",
        ja: "ジャカルタ国際科学フェア (JISF-2024)",
        de: "Jakarta Internationale Wissenschaftsmesse (JISF-2024)",
      },
      organization: {
        en: "Indonesian Young Scientist Association",
        ja: "インドネシア若手科学者協会",
        de: "Indonesischer Verband junger Wissenschaftler",
      },
      date: "July 2024",
      location: {
        en: "Indonesian Institute of Life-Science, Indonesia",
        ja: "インドネシア、インドネシア生命科学研究所",
        de: "Indonesisches Institut für Lebenswissenschaften, Indonesien",
      },
      category: {
        en: "Innovative Science",
        ja: "革新的科学",
        de: "Innovative Wissenschaft",
      },
      achievements: [
        {
          en: "Gold Medal",
          ja: "金メダル",
          de: "Goldmedaille",
        },
        {
          en: "Second Place Award",
          ja: "準優勝",
          de: "Zweiter Platz",
        },
      ],
    },
    {
      title: {
        en: "International Science Project Competition (ISPC-2024)",
        ja: "国際科学プロジェクトコンペティション (ISPC-2024)",
        de: "Internationaler Wissenschaftsprojekt-Wettbewerb (ISPC-2024)",
      },
      organization: {
        en: "Ministry of Education",
        ja: "文部科学省",
        de: "Bildungsministerium",
      },
      date: "September 2024",
      location: {
        en: "Online competition",
        ja: "オンラインコンペティション",
        de: "Online-Wettbewerb",
      },
      category: {
        en: "Innovative Science",
        ja: "革新的科学",
        de: "Innovative Wissenschaft",
      },
      achievements: [
        {
          en: "Silver Medal",
          ja: "銀メダル",
          de: "Silbermedaille",
        },
      ],
    },
    {
      title: {
        en: "Thailand Physics Olympiad",
        ja: "タイ物理オリンピック",
        de: "Thailand Physik-Olympiade",
      },
      organization: {
        en: "The Promotion of Academic Olympiad and Development of Science Education Foundation under the patronage of Her Royal Highness Princess Galyani Vadhana Krom Luang Naradhiwas Rajanagarindra",
        ja: "ガリヤニ・ワダナ・クロム・ルアン・ナラディワス・ラジャナガリンドラ王女殿下の後援による学術オリンピック振興・科学教育開発財団",
        de: "Die Förderung der Akademischen Olympiade und Entwicklung der Wissenschaftsbildungsstiftung unter der Schirmherrschaft Ihrer Königlichen Hoheit Prinzessin Galyani Vadhana Krom Luang Naradhiwas Rajanagarindra",
      },
      date: "2022-2024",
      location: {
        en: "Burapha University, Thailand",
        ja: "タイ、ブラパー大学",
        de: "Burapha Universität, Thailand",
      },
      category: {
        en: "Physics",
        ja: "物理学",
        de: "Physik",
      },
      achievements: [
        {
          en: "Qualified to second stage",
          ja: "第二段階に進出",
          de: "Qualifiziert für die zweite Stufe",
        },
      ],
    },
  ]

  return (
    <section id="awards" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">{t("awards.title")}</h2>
          <div className="h-1 w-20 bg-primary mt-4 mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{t("awards.subtitle")}</p>
        </motion.div>

        <div className="space-y-6">
          {awards.map((award, index) => (
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
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="font-semibold">{award.date}</span>
                      </div>
                      <h3 className="text-xl font-bold">{award.title[language]}</h3>
                      <p className="text-muted-foreground">{award.organization[language]}</p>
                    </div>

                    <div className="md:w-3/4 space-y-4">
                      {award.description && <p>{award.description[language]}</p>}

                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{award.location[language]}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-primary" />
                          <Badge variant="secondary">{award.category[language]}</Badge>
                        </div>
                      </div>

                      {award.achievements.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Award className="h-4 w-4 text-secondary mt-1" />
                          <div className="flex flex-wrap gap-2">
                            {award.achievements.map((achievement, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                className="bg-secondary/10 text-secondary-foreground border-secondary/20"
                              >
                                {achievement[language]}
                              </Badge>
                            ))}
                          </div>
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
