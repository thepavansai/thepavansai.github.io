import { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import GrainOverlay from './components/GrainOverlay'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

const tickerItems = [
  'FASTAPI',
  'SPRING BOOT',
  'POSTGRESQL',
  'REDIS',
  'DOCKER',
  'AST DEPENDENCY ANALYSIS',
  'AI / LLM GROUNDING',
  'REACT',
  'NEXT.JS',
  'REST APIS',
  'MICROSERVICES',
]

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <ThemeProvider>
      <Preloader onComplete={() => setLoading(false)} />
      <CustomCursor />
      <GrainOverlay />
      
      <div className={`transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <main>
          <Hero />
          <Marquee items={tickerItems} speed={30} />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
