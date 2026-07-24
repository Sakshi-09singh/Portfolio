import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Skills from '@/components/home/skills/Skills'
import Projects from '@/components/home/projects/Projects'
import Experience from '@/components/home/experience/Experience'
import Contact from '@/components/home/Contact'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
