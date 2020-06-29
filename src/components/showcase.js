import React, { Component } from 'react';

export default class Showcase extends Component{
  render(){
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <a href={this.props.link}>
        <img src={this.props.src} alt={this.props.name}></img>
        </a>
        <h3>Details</h3>
        <p className="col-9">{this.props.details}</p>
        <div className="social">
        <a href={this.props.repo} className="social-link">
          <i className="fab fa-github-square fa-2x"></i>
          </a>
        </div>
      </div>
    )
  }
}