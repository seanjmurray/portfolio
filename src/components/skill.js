import React from 'react';

const Skill = (props) => {
    return(
      <div className="skillCard col-3">
        <h4>{props.name}</h4>
        <div className="bar col-9">
          <div id={props.name} className={props.width} >
             {props.percent}
          </div>
        </div>
      </div>
    )
  }
  export default Skill
