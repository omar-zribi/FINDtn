import React from "react";
import AddJobCSS from "./AddJob.module.css";
// import ProfileMale from "../../private interface/profile/ProfileMale";
// import ProfileFemale from "../../private interface/profile/ProfileFemale";

const AddJob = () => {
  return (
    <div className={AddJobCSS.addJob}>
      <div className={AddJobCSS.profile}>
        {/* <ProfileMale /> */}
        {/* <ProfileFemale /> */}
      </div>
      <div className={AddJobCSS.addJobCard}>
        <h2>Add Job</h2>
        <form className={AddJobCSS.addJobform}>
          <label></label>
          <input className={AddJobCSS.inputAddJob} type="text" />
          <label></label>
          <input className={AddJobCSS.inputAddJob} type="text" />
          <label></label>
          <input className={AddJobCSS.inputAddJob} type="text" />
          <label></label>
          <input className={AddJobCSS.inputAddJob} type="text" />
          <label></label>
          <input className={AddJobCSS.inputAddJob} type="text" />
        </form>
        <span className={AddJobCSS.addJobCardbtn}>
        <button className={AddJobCSS.addJobbtn}>Ajouter</button>
        <button className={AddJobCSS.addJobbtn}>Annuler</button>
        </span>
      </div>
    </div>
  );
};

export default AddJob;
