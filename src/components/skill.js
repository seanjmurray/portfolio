import React, { Component } from 'react';

export default class skill extends Component{
  render(){
    return(
      <div className="skillCard col-3">
        <h4>{this.props.name}</h4>
        <div className="bar col-9">
          <div id={this.props.name} className={this.props.width} >
             {this.props.percent}
          </div>
        </div>
      </div>
    )
  }
}