import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header';
import Hero from './hero';
import About from './about';
import Footer from './footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <section>
    <Header />
    <Hero />
    <main>
    <About />
    </main>
    <Footer />
  </section>
  ,document.getElementById('root')
);


serviceWorker.unregister();
