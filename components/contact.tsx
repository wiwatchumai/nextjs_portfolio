"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone } from "lucide-react"
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
          <h2 className="text-3xl font-bold">Contact</h2>
          <div className="h-1 w-20 bg-primary mt-4 mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
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
            <Card>
              <CardContent className="p-6 space-y-6">
                <h3 className="text-xl font-bold">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="bg-primary/10 p-2 rounded-md text-primary">{item.icon}</div>
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-muted-foreground">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    Currently looking for internship opportunities for Summer 2024
                  </p>
                </div>

                <div className="flex justify-center pt-4">
                  <Button asChild className="rounded-md" variant="default">
                    <a href="mailto:wiwatchumai@gmail.com" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>Email Me</span>
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
