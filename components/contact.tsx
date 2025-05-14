"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { t, language } = useLanguage()

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: t("contact.location"),
      details: {
        en: "Nishi-ku, Fukuoka, Japan",
        ja: "日本、福岡市西区",
        de: "Nishi-ku, Fukuoka, Japan",
      },
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: t("contact.email"),
      details: "wiwatchumai@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: t("contact.phone"),
      details: "+66 655890972",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      title: t("contact.instagram"),
      details: "@feuzzy_field",
      isLink: true,
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">{t("contact.title")}</h2>
          <div className="h-1 w-20 bg-primary mt-4 mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <Card>
              <CardContent className="p-6 space-y-6">
                <h3 className="text-xl font-bold">{t("contact.info")}</h3>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="bg-primary/10 p-2 rounded-md text-primary">{item.icon}</div>
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        {item.isLink ? (
                          <a
                            href="https://www.instagram.com/feuzzy_field/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {item.details}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">
                            {typeof item.details === "object" ? item.details[language] : item.details}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center pt-4 gap-4">
                  <Button asChild className="rounded-md" variant="default">
                    <a href="mailto:wiwatchumai@gmail.com" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>{t("contact.emailMe")}</span>
                    </a>
                  </Button>
                  <Button asChild className="rounded-md" variant="outline">
                    <a
                      href="https://www.instagram.com/feuzzy_field/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Instagram className="h-4 w-4" />
                      <span>{t("contact.followInstagram")}</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
