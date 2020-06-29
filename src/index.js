import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/competencies';
import Footer from './components/footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <section>
    <Header />
    <Hero />
    <main>
    <About />
    <Projects />
    <Skills />
    </main>
    <Footer />
  </section>
  ,document.getElementById('root')
);


serviceWorker.unregister();
