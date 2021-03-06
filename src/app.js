import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/competencies';
import Contact from './components/contact';
import Footer from './components/footer';

export default function App(){
  return(
  <section>
    <Header />
    <Hero />
  <main>
    <About />
    <Projects />
    <Skills />
    <Contact />
  </main>
    <Footer />
  </section>
  )
}