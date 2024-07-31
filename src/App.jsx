import Hero from './components/Hero'
import { BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Projects from './components/Projects'
import { useEffect } from 'react'
import Lenis from 'lenis'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      <BrowserRouter>
        <div className="mx-auto xm:max-w-lg max-w-xl md:max-w-3xl lg:max-w-4xl text-base xm:px-0 px-6">
          <Nav />
          <Hero />
          <Projects />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
