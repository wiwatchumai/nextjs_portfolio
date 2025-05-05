"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, MapPin, Trophy } from "lucide-react"

type AwardItem = {
  title: string
  organization: string
  date: string
  location: string
  description: string
  category: string
  achievement?: string
}

export default function Awards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const awards: AwardItem[] = [
    {
      title: "Young Scientist Competition (YSC27th)",
      organization: "National Science and Technology Development Agency (NSTDA)",
      date: "January 2025",
      location: "Bangkok, Thailand",
      category: "Physics and Astronomy",
      achievement: "Gold Medal", "First Place Award"
    },
    {
      title: "ASEAN Student Science Fair (ASSF-2024)",
      organization: "Science Association of Indonesia",
      date: "August 2024",
      location: "Online competition",
      category: "Physics and Astronomy",
      achievement: "Gold Medal", "First Place Award"
    },
    {
      title: "SUT SMILE CYS III national conference on science",
      organization: "Suranaree University of Technology",
      date: "August 2024",
      location: "Faculty of science, Suranaree University of Technology, Thailand",
      category: "Physical science",
      achievement: "Gold Medal", "Best Poster Presentation Award", "First Place Award"
    },
    {
      title: "Jakarta International Science Fair (JISF-2024)",
      organization: "Indonesian Young Scientist Association",
      date: "July 2024",
      location: "Indonesian Institute of Life-Science, Indonesia",
      category: "Innovative Science",
      achievement: "Gold Medal", "Second Place Award"
    },
    {
      title: "International Science Project Competition (ISPC-2024)",
      organization: "Ministry of Education",
      date: "September 2024",
      location: "Online competition",
      category: "Innovative Science",
      achievement: "Silver Medal",
    },
    {
      title: "Thailand Physics Olympiad",
      organization: "The Promotion of Academic Olympiad and Development of Science Education Foundation under the patronage of Her Royal Highness Princess Galyani Vadhana Krom Luang Naradhiwas Rajanagarindra",
      date: "2022-2024",
      location: "Burapha University, Thailand",
      category: "Physics",
      achievement: "Qualified to second stage",
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
          <h2 className="text-3xl font-bold">Awards & Competitions</h2>
          <div className="h-1 w-20 bg-primary mt-4 mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Recognitions and competitions that have shaped my academic journey
          </p>
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
                      <h3 className="text-xl font-bold">{award.title}</h3>
                      <p className="text-muted-foreground">{award.organization}</p>
                    </div>

                    <div className="md:w-3/4 space-y-4">
                      <p>{award.description}</p>

                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{award.location}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-primary" />
                          <Badge variant="secondary">{award.category}</Badge>
                        </div>

                        {award.achievement && (
                          <div className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-secondary" />
                            <Badge
                              variant="outline"
                              className="bg-secondary/10 text-secondary-foreground border-secondary/20"
                            >
                              {award.achievement}
                            </Badge>
                          </div>
                        )}
                      </div>
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
