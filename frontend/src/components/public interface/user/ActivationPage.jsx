import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActivation } from "../../../redux/Action/User.action";
import { useParams } from "react-router-dom";
import axios from "axios";

const ActivationPage = () => {
  
  let { UserName } = useParams();
  const [activationCode, setActivationCode] = useState("");
    console.log(UserName)
    // const activFunction =(e)=>{
    //   e.preventDefault()
      // const active=()=>{
//   axios.post(`/activation/${userName}`);
// }
// active(activationCode)}

  return (
    <div>
      <h1>ActivationPage</h1>
      <form>
        {/* <h3>{userName}</h3> */}
        <input
          type="text"
          maxLength={6}
          value={activationCode}
          onChange={(e) => setActivationCode(e.target.value)}
        />
      </form>
      {/* <Link to={`/${user.userName}`}> */}
      {/* <button type="submit" onClick={active}>
          Activer
        </button> */}
      {/* </Link> */}
    </div>
  );
};

export default ActivationPage;
