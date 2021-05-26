import React, { useState } from "react"

const Resume = () => {
    // const [hidden, show] = useState([false,false,false])

    return (
        <section>
            <h1>Professional Experience</h1>
        <div className="flex">
            <div className='skillCard col-3'>
                <h3>OpalSoft Inc</h3>
                <h5>Software Developer/Tester</h5>
                <h5>October 2020-Present</h5>
                <h5>Secret Clearance</h5>
            {/* {!hidden[0] ? <i onClick={() => show([!hidden[0], hidden[1], hidden[2]])} className="fas fa-caret-right fa-2x"></i> : <i onClick={() => show([!hidden[0], hidden[1], hidden[2]])} className="fas fa-caret-down fa-2x"></i> }
            {hidden[0] ? 
            <div className=''>
            <ul>
                <li>Perform testing on Dod software systems.</li>
                <li>Work in an agile/scrum setting with finishing all assigned tasks per sprint.</li>
                <li>Test software using a multitude of black box techniques and strategies.</li>
            </ul>
            </div>
            : 
            null } */}
            </div>
            <br />
            <div className='skillCard col-3'>
                <h3>US Army</h3>
                <h5>CBRN NCO, Team Leader</h5>
                <h5>November 2015 - Present</h5>
                <h5>Secret Clearance</h5>
            {/* {!hidden[1] ? <i onClick={() => show([hidden[0], !hidden[1], hidden[2]])} className="fas fa-caret-right fa-2x"></i> : <i onClick={() => show([hidden[0], !hidden[1], hidden[2]])} className="fas fa-caret-down fa-2x"></i> }
            {hidden[1] ? 
            <div className='jobs'>
            <ul>
                <li>Operated and maintained equipment in excess of $2,000,000 including vehicles, Communications systems, sensitive cryptographic, weapon systems, and personal gear.</li>
                <li>Provided advanced CBRN detection and identification to state response agencies.</li>
                <li>Deployed to Ukraine and trained Ukrainian soldiers on NATO doctrine.</li>
            </ul>
            </div>
            : 
            null } */}
            </div>
            <br />
            <div className='skillCard col-3'>
            <h3>Yellow Brick Road</h3>
            <h5>Senior Security Officer</h5>
            <h5>January 2017 - July 2017</h5>
            {/* {!hidden[2] ? <i onClick={() => show([hidden[0], hidden[1], !hidden[2]])} className="fas fa-caret-right fa-2x"></i> : <i onClick={() => show([hidden[0], hidden[1], !hidden[2]])} className="fas fa-caret-down fa-2x"></i> }
            {hidden[2] ? 
            <div className='jobs'>
            <ul>
                <li>Held a NYS Security license, DSI and handcuff trained.</li>
                <li>Operated more than 50 PTZ cameras and archived footage for legal cases.</li>
                <li>Maintained an event blotter, and wrote reports of all guest incidents.</li>
            </ul>
            </div>
            : 
            null } */}
            </div>
        </div>
        </section>
    )
}

export default Resume