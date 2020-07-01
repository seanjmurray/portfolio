import React from 'react';

export default function ProjectCard(props){
    return (
      <div className="projectCard col-5">
        <h4>{props.name}</h4>
        <a href={props.link}>
        <img className="cardImg" src={props.src} alt={props.name}></img>
        </a>
        <p className="col-9">{props.desc}</p>
        <div className="social">
        <a href={props.repo} className="social-link">
          <i className="fab fa-github-square fa-2x"></i>
          </a>
        </div>
      </div>
    )
  }