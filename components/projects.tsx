"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

type Project = {
  id: number
  title: string
  description: string
  tags: string[]
  year: string
  type: string
  github?: string
  demo?: string
}

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [projects] = useState<Project[]>([
    {
      id: 0,
      title: "Interactive Rotor Balancing Calculator",
      description:
        "A comprehensive web-based tool for single plane balancing problems in rotor dynamics. This field balancing algorithm requires minimal machinery pause and provides accurate correction weight calculations. Features include predicted trial weight calculations, effective vibration vector analysis, influence coefficient computation, heavy spot identification, and correction weight recommendations. Built with React and TypeScript for real-time calculations.",
      tags: ["Rotor Dynamics", "Field Balancing", "Web Calculator", "React", "TypeScript"],
      year: "2025",
      type: "Interactive Tool",
      demo: "/calculator",
    },
    {
      id: 1,
      title: "Simplification to Droplet Impact Fluid Surface Phenomenon Through Bouncing Ball Model",
      description:
        "The ball bouncing problem is a well-known problem in physics, involving a ball dropped from a height to the ground. In this paper, the work investigates the theoretical and experimental setup that describes the dynamics of a rigid body on a chaotic elastic surface under air-damp conditions. Examination of four different types of balls is made, including a marble, metal ball, tennis ball, and ping-pong ball. In this experiment, the effect of impact velocities is not considered; the ball is dropped from a fixed height. The method in this work employs the Rayleigh Dissipation Function to specify the effects of dissipative forces in Lagrangian mechanics. Our discoveries reveal that the dynamics of the ball exhibit horizontal motion while damping oscillation occurs during the destabilized vertical pinch-off motion. Moreover, rotational motion is studied, as the ball impacts asymmetrically on surface. According to the studies of four different balls, the outcomes illustrate that greater mass results in more frequent dynamics, and the experimental results at some points align with the theoretical model of the studied motion. This knowledge contributes to our understanding of the complex fluid system and could serve as a foundation for further developments in water droplet simulation.",
      tags: ["Droplet Impact", "Damping Oscillation", "Bouncing Object"],
      year: "2023-2024",
      type: "Science Fair",
    },
    {
      id: 2,
      title: "Theoretical Model of a Bouncing Ball System Under Elastic Platform",
      description:
        "Bouncing balls are a well-known problem in physics, where a ball drops from a height to the ground. Despite its simplicity, a ball may exhibit fascinating behaviors upon surface impaction. This research delves into the bouncing ball problem under different surface conditions by allowing the surface to vibrate freely owing to an external impulse. The experiment was conducted to study the impact of a ball on an elastic surface upon the presence of air-damping. Four types of balls were included in the examination: steel ball, marble, tennis ball, and ping-pong ball. The consideration of ball dynamics was taken in two parts including ball bouncing and oscillating. However, the complexity occurs when the ball oscillates in contact with the surface. To understand chaos, Finite Element Analysis and Python Computing were employed to form the simulations while pre-dicting the surface behaviors that affect the ball motion. Moreover, RDI high-speed cameras were used for motion amplification and to analyze the surface vibration more precisely. Our discovery revealed the relationship between damping ratio, peak-to-peak displacement, oscillation frequency, and amplitudes upon different kinds of mass. Fi-nally, this research contributes to the development of facets of spray research such as improvement in the spray nozzle in the cooling tower.",
      tags: ["Damping Oscillation", "Chaos", "Bouncing Ball Problem"],
      year: "2024",
      type: "Science Fair",
    },
    {
      id: 3,
      title: "Finite Element Method Approach Modal Characterization of a Rigid-Beam Axial Oscillation Under Load",
      description:
        "The axial oscillation of long beams has been extensively studied for various engineering applications, such as structural optimization in civil and mechanical design. In addition to transverse oscillations, long rigid beams are also susceptible to axial oscillations, which can contribute to structural instability, potentially leading to long-term failure and adverse effects on engineering systems. This study focuses on the mathematical model enhance structural dynamics derived from the analysis of a rigid beams received axially static loaded conditions. A generalized approach is adopted by modeling the beam as a simple rectangular structure to isolate the fundamental oscillatory behavior. The mathematical model is developed using the Finite Difference Method (FDM) and validated through the Finite Element Method (FEM) using CalculiX to determine the mode shapes exceed by the beam. The results from LU Decomposition Method (LUD) confirm the validity of the formulated system of linear algebraic equations. Also this work reveals the natural frequencies from dynamic responses and corresponding mode-shapes related to longitudinal oscillation. The solutions obtained from both the mathematical model and the numerical studies show a strong correlation. These findings offer insights into the structural integrity and axial vibrational characteristics of rigid beams, with valuable implications for the further engineering applications.",
      tags: ["Finite Element Method", "Beam", "Structural Dynamics"],
      year: "2024-2025",
      type: "Conference Series",
    },
  ])

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl">My Projects</h2>
          <div className="h-1 w-20 bg-primary mt-4 mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A selection of academic and personal projects I've worked on during my studies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="mb-4 flex justify-between items-start">
                    <Badge variant="outline" className="mb-2">
                      {project.type}
                    </Badge>
                    <span className="text-xs font-medium bg-muted px-2 py-1 rounded-md">{project.year}</span>
                  </div>

                  <h3 className="text-lg mb-3">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow" style={{ textAlign: "justify" }}>
                    {project.description}
                  </p>

                  <div className="mt-auto space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      {project.github && (
                        <Button asChild variant="outline" size="sm">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> Code
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button asChild size="sm">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> Demo
                          </a>
                        </Button>
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
