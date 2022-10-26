import React from 'react'
import MyJobCSS from "./MyJob.module.css"

const MyJob = () => {
  return (
    <div className={MyJobCSS.myJob}>
        <h2>My Job</h2>
       <span className={MyJobCSS.myJobForm}>
        <input type="text" />
        <button>Edit</button>
        <button>Delete</button>
        </span>
        </div>
  )
}

export default MyJob