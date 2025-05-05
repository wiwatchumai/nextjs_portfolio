import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Awards from "@/components/awards"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Education />
      <Awards />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
