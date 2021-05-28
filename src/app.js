import React, { Suspense, lazy } from 'react'; 
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
  return(
    <Suspense fallback={<Loading></Loading>}>
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
    </Suspense>
    )
}
export default App;