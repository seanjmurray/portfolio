import React, { Component } from 'react';

export default class ProjectCard extends Component{
  render(){
    return (
      <div className="projectCard col-5">
        <h4>{this.props.name}</h4>
        <a href={this.props.link}>
        <img className="cardImg" src={this.props.src} alt={this.props.name}></img>
        </a>
        <p className="col-9">{this.props.desc}</p>
        <div className="social">
        <a href={this.props.repo} className="social-link">
          <i className="fab fa-github-square"></i>
          </a>
        </div>
      </div>
    )
  }
}