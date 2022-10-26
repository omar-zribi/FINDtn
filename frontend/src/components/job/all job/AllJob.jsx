import React from 'react'
import AllJobCSS from './AllJob.module.css'

const AllJob = () => {
  return (
    <div className={AllJobCSS.allJob}>
        <div className={AllJobCSS.allJobTable}>
        <table className={AllJobCSS.table}>
  <thead>
    <tr>
      <th className={AllJobCSS.th}>First Name</th>
      <th className={AllJobCSS.th}>Last Name</th>
      <th className={AllJobCSS.th}>Job Title</th>
      <th className={AllJobCSS.th}>Twitter</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className={AllJobCSS.td} data-column="First Name">James</td>
      <td className={AllJobCSS.td} data-column="Last Name">Matman</td>
      <td className={AllJobCSS.td} data-column="Job Title">Chief Sandwich Eater</td>
      <td className={AllJobCSS.td} data-column="Twitter">@james</td>
    </tr>
   
  </tbody>
</table>
    </div>
    </div>
  )
}

export default AllJob