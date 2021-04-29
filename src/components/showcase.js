import React from 'react';

const Showcase = (props) => {
    return (
      <div className="card">
        <h2>{props.name}</h2>
        <a href={props.link}>
        <img src={props.src} alt={props.name}></img>
        </a>
        <h3>Details</h3>
        <p className="col-9">{props.details}</p>
        <div className="social">
        <a href={props.repo} className="social-link">
          <i className="fab fa-github-square fa-2x"></i>
          </a>
        </div>
      </div>
    )
  }
export default Showcase