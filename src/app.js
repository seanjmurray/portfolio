import React, { Suspense, lazy, useState, useEffect } from 'react'; 
import Loading from './components/loading'
// Lazy loading components 
const Header = lazy(() => import('./components/header'))
const Hero = lazy(() => import('./components/hero'))
const About = lazy(() => import('./components/about'))
const Projects = lazy(() => import('./components/projects'))
const Resume = lazy(() => import('./components/resume'))
const Skills = lazy(() => import('./components/competencies'))
const Contact = lazy(() => import('./components/contact'))
const Footer = lazy(() => import('./components/footer'))


const App = () =>  {
  const [load, isLoading] = useState(false)
  useEffect (() => {
    setTimeout(isLoading(true),1500)
    
  },[])
  return(
    <Suspense fallback={<Loading />}>
      {load ?
      <Loading />
    :
    <section>
      <Header />
      <Hero />
    <main>
      <About />
      <Projects />
      <Resume />
      <Skills />
      <Contact />
    </main>
      <Footer />
    </section>
}
    </Suspense>
    )
}
export default App;