import { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Formacao from './components/Formacao'
import Especializacoes from './components/Especializacoes'
import Experiencias from './components/Experiencias'
import Contato from './components/Contato'
import Footer from './components/Footer'
import ParallaxBg from './components/ParallaxBg'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 3200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!loaded) return
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
        { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
      )
      document.querySelectorAll('.anim').forEach(el => observer.observe(el))
    }, 300)
    return () => clearTimeout(timer)
  }, [loaded])

  return (
    <>
      <Loading />
      <ParallaxBg />
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Formacao />
        <Especializacoes />
        <Experiencias />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
