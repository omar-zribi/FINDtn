import React from 'react'
import ProfileCSS from './Profile.module.css'
import male from './male.jpg'
import female from './female.jpg'
import MyJob from '../../job/my job/MyJob'
import AddJob from '../../job/add job/AddJob'

const ProfileFemale = () => {
  return (
    <div className={ProfileCSS.profile}>
     <div className={ProfileCSS.profilecard}>
      <span className={ProfileCSS.profileAvatar}>
       {/* <img className={ProfileCSS.avatarProfileMale} src={male} alt="" />  */}
      </span>
       <img className={ProfileCSS.avatarProfileFemale} src={female} alt="" /> 
       <div className={ProfileCSS.ProfileCoordonnees}>
        <h1>userName</h1>
        <h1>job</h1>
        <h1>societe</h1>
        <h1>contact</h1>
       </div>
     </div>
     <div  className={ProfileCSS.myJob}>
      <MyJob/>
     </div>
      <AddJob/>
    </div>
  )
}

export default ProfileFemale
