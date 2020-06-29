import React, { Component } from 'react';

export default class About extends Component{
  render(){
    return(
      <section id="story" className="story">
        <h2>My Story</h2>
        <p className="col-9">I am motivated to solve problems and produce agile, responsive, and modern solutions. I draw experience from a  background in HAZMAT and antiterrorism, which has taught me to <b>think</b> and <b>solve problems</b> in an efficient and effective way. I have experience with: JavaScript, HTML5, CSS, Node.js, jQuery, MongoDB and SQL, and a few misc. libraries. Lastly I love to <b>learn</b> and <b>teach</b>.</p>
        <div className="flex col-6 social">
        <a href="https://twitter.com/seanjmurray1" class="social-link"><i
            class="fab fa-twitter-square fa-2x"></i></a>

        <a href="https://www.linkedin.com/in/sean-murray-b461801a2/" class="social-link"><i
            class="fab fa-linkedin fa-2x"></i></a>

        <a href="https://github.com/seanjmurray/" class="social-link"><i
            class="fab fa-github-square fa-2x"></i></a>

        <a href="https://www.reddit.com/user/seantrystocode" class="social-link"><i
            class="fab fa-reddit-square fa-2x"></i></a>
        </div>
      </section>
    )
  }
}