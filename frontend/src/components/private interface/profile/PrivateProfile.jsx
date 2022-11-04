// import React, { useState } from "react";
// import ProfileCSS from "./Profile.module.css";
// import male from "./male.jpg";
// import female from "./female.jpg";
// import MyJob from "../../job/my job/MyJob";
// import AddJob from "../../job/add job/AddJob";
// import { useDispatch, useSelector } from "react-redux";
// import { activeProfileUsers } from "../../../redux/Action/User.action";

// const PrivateProfile = () => {
//   const user = useSelector((state) => state.userReducer.user);
//   const [activationCode, setActivationCode] = useState();
//   const dispatch = useDispatch();
//   const activeProfile = (e) => {
//     e.preventDefault();
//     dispatch(activeProfileUsers({activationCode}));
//   }
//   const logout = () => {
//     localStorage.removeItem("token")    
//   };

//   return (
//     <div className={ProfileCSS.profile}>
//       {user.isActive===false ? (
//         <>
//           merci de vérifier votre boite mail un code de verification a ete
//           envoyer
//           <input
//             type="number"
//             value={activationCode}
//             onChange={(e) => setActivationCode(e.target.value)}/>
//           <button type="submit" onClick={activeProfile}>
//             ACTIVER
//           </button>
//         </>
//       ) : (
//         <>
//           <div className={ProfileCSS.profilecard}>

//             <span className={ProfileCSS.profileAvatar}>
//             <a href="/"> 
//             <button className={ProfileCSS.logoutBTN} onClickCapture={logout}>
//             <img className={ProfileCSS.avatarProfileMale} src={(user.userSex===male)?({male}):({female})} alt="" />
//             </button>
//             </a>
//             </span>
//             <div className={ProfileCSS.ProfileCoordonnees}>
//               <h1>{user.userName}</h1>
//               <h1>{user.email}</h1>
//               <h1>{user.etabOrigin}</h1>
//               <h1>{user.gouvernerat}</h1>
//               <h1>{user.posteAcctuel}</h1>
//             </div>
//           </div>
//           <div className={ProfileCSS.myJob}>
//             <MyJob />
//           </div>
//           <AddJob />
//         </>
//       )}
//     </div>
//   );
// };

// export default PrivateProfile;
import React from 'react'

const PrivateProfile = () => {
  return (
    <div>
      PrivateProfile
    </div>
  )
}

export default PrivateProfile
