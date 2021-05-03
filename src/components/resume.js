import React, { useState } from "react"

const Resume = () => {
    const [jobs, changeJobs] = useState(['test','Test 1', 'test 2'])

    return (
        <div className="card">
            <h1>My Experience</h1>
            <button onClick={() => changeJobs([...jobs])} >Show</button>
            <h2>{jobs[Math.floor((Math.random() * 3))]}</h2>
        </div>
    )
}

export default Resume