import React, { Component } from 'react';

 export default class Header extends Component{
  render(){
    return(
      <header>
        <a href="#story">My Story</a>
        <a href="#projects">Projects</a>
        <a href="#skills">My Skills</a>
        <a href="#contact">Contact</a>
      </header>
    )
  }
}