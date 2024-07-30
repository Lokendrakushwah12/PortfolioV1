import Hero from './components/Hero';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Projects from './components/Projects';

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="mx-auto xm:max-w-lg max-w-xl md:max-w-3xl lg:max-w-4xl text-base xm:px-0 px-6">
          <Nav />
          <Hero />
          <Projects />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
