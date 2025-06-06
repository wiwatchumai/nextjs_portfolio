"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      details: "Nishi-ku, Fukuoka, Japan",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      details: "wiwatchumai@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      details: "+66 655890972",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      title: "Instagram",
      details: "@feuzzy_field",
      isLink: true,
    },
  ]

  return (
    <section id="contact" className="py-20 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl silver-gradient">Contact</h2>
          <div className="h-[1px] w-20 bg-white/30 mt-4 mx-auto"></div>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Feel free to reach out through any of the following channels
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="bg-black/40 border border-white/10">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-xl silver-gradient">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="bg-white/5 p-2 rounded-md text-white/80">{item.icon}</div>
                      <div>
                        <h4 className="font-medium text-white/90">{item.title}</h4>
                        {item.isLink ? (
                          <a
                            href="https://www.instagram.com/feuzzy_field/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/80 hover:text-white"
                          >
                            {item.details}
                          </a>
                        ) : (
                          <p className="text-white/60">{item.details}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center pt-4 gap-4">
                  <Button
                    asChild
                    className="rounded-none bg-white/10 hover:bg-white/15 text-white border border-white/20"
                    variant="outline"
                  >
                    <a href="mailto:wiwatchumai@gmail.com" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>Email Me</span>
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="rounded-none bg-transparent hover:bg-white/5 border border-white/20 text-white"
                    variant="outline"
                  >
                    <a
                      href="https://www.instagram.com/feuzzy_field/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Instagram className="h-4 w-4" />
                      <span>Follow on Instagram</span>
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
