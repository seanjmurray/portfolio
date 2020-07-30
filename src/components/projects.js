import React from 'react';
import Showcase from './showcase';
import ProjectCard from './project-card';

export default function Projects(){
    return(
      <section id="projects">
        <h1>Some of my work</h1>
        <Showcase 
        name="React Blog"
        link="https://www.seanmurray.dev/"
        src="images/react-blog.png"
        details="This is a MERN stack app I built. I wanted to build a tool I could use to improve my technical writing, and to learn React. This was the end product. Development is still ongoing as I learn more and improve my skills."
        repo="https://github.com/seanjmurray/react-blog"
        />
        <Showcase
         name="Pitch Finder"
         link="https://pitch-finder.herokuapp.com/"
         src="images/pitch-finder.png" 
         details="This was a collaborative project built over the course of a week using Node, Express, EJS, and SQL. It is a full CRUD application featuring the ability to create games, update games, join and remove yourself from games, and a profile page which shows only games you are attending. Login is handled using OAUTH 2.0 using the Auth0 strategy and express sessions."
         repo="https://github.com/seanjmurray/pitch-finder"
        />
        <div className="flex">
          <ProjectCard
            name="Zen Aquarium"
            link="https://seanjmurray.github.io/while-201-project/"
            src="images/zen.png"
            desc="A group project, built using pure JS."
            repo="https://github.com/seanjmurray/while-201-project"
          />
            <ProjectCard
              name="Book App"
              link="https://sm-pr-booklist.herokuapp.com/"
              src="images/bookApp.png"
              desc="A collaborative project, built using Node, express, EJS, and SQL."
              repo="https://github.com/seanjmurray/book_app"
            />
          <ProjectCard
            name="Portfolio v1"
            link="https://seanjmurray.github.io/Personal-site/"
            src="images/v1.png"
            desc="Original version of my portfolio, built with Bootstrap."
            repo="https://github.com/seanjmurray/Personal-site"
          />
          <ProjectCard
            name="Salmon Cookies"
            link="https://seanjmurray.github.io/cookie-stand/"
            src="images/salmon.png"
            desc="A site built and rendered with pure JS."
            repo="https://github.com/seanjmurray/cookie-stand"
          />
        </div>
      </section>
    )
  }
