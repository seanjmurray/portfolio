import React from 'react';

export default function About(){
    return(
      <section id="story" className="card">
        <h1>My Story</h1>
        <p className="col-9">I am motivated to solve problems and produce agile, responsive, and modern solutions. I draw experience from a  background in HAZMAT and antiterrorism, which has taught me to <b>think</b> and <b>solve problems</b> in an efficient and effective way. I have experience with: JavaScript, HTML5, CSS, Node.js, jQuery, MongoDB and SQL, and a few misc. libraries. Lastly I love to <b>learn</b> and <b>teach</b>.</p>
        <div className="flex col-6 social">
        <a href="https://twitter.com/seanjmurray1" className="social-link"><i
            className="fab fa-twitter-square fa-2x"></i></a>

        <a href="https://www.linkedin.com/in/sean-murray-b461801a2/" className="social-link"><i
            className="fab fa-linkedin fa-2x"></i></a>

        <a href="https://github.com/seanjmurray/" className="social-link"><i
            className="fab fa-github-square fa-2x"></i></a>

        <a href="https://www.reddit.com/user/seantrystocode" className="social-link"><i
            className="fab fa-reddit-square fa-2x"></i></a>
        </div>
      </section>
    )
  }
