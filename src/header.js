import React, { Component } from 'react';

 export default class Header extends Component{
  render(){
    return(
      <header>
        <ul>
          <li><a href="#story">My Story</a></li>
          <li>Competencies</li>
          <li>Projects</li>
          <li><i className="fas fa-address-card"></i> Contact</li>
        </ul>
      </header>
    )
  }
}