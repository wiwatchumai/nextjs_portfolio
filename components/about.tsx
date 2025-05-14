"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MapPin, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { t } = useLanguage()

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
          <h2 className="text-3xl font-bold">{t("about.title")}</h2>
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
            <h3 className="text-2xl font-bold">{t("about.subtitle")}</h3>
            <div className="h-1 w-20 bg-primary mt-2 mb-4 mx-auto"></div>
          </div>

          <p className="text-muted-foreground text-justify">{t("about.p1")}</p>

          <p className="text-muted-foreground text-justify">{t("about.p2")}</p>

          <p className="text-muted-foreground text-justify">{t("about.p3")}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 text-sm max-w-md mx-auto">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">{t("about.location")}</h4>
                <p className="text-muted-foreground">Fukuoka, Japan</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">{t("about.email")}</h4>
                <p className="text-muted-foreground">wiwatchumai@gmail.com</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
