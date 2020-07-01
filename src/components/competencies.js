import React from 'react';
import Skill from './skill';

export default function Skills(){
    return(
      <section id="skills">
        <h1>What I bring to the table</h1>
        <div className="flex">
          <Skill  name="HTML" width="col-11 skill" percent="90%"  />
          <Skill name="CSS" width="col-9 skill" percent="75%" />
          <Skill name="JavaScript" width="col-11 skill" percent="90%" />
          <Skill name="React" width="col-8 skill" percent="70%" />
          <Skill name="Bootstrap" width="col-10 skill" percent="85%" />
          <Skill name="jQuery" width="col-10 skill" percent="85%" />
          <Skill name="Node" width="col-10 skill" percent="85%"  />
          <Skill name="SQL" width="col-9 skill" percent="75%" />
          <Skill name="MongoDB" width="col-10 skill" percent="85%" />
          <Skill name="Security" width="col-9 skill" percent="75%" />
        </div>
      </section>
    )
  }
