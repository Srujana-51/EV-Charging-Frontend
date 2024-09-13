import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
 
const Login = () => {
  const[userName,setUserName]=useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    localStorage.setItem("username",userName);
    localStorage.setItem("driverid",Math.floor(Math.random()*100));
    navigate("/dashboard");
  };
  return (
    <div className="home">
      <div className="login">
        <h3>Enter User ID</h3>
        <input className="input" type="text" placeholder="Enter User Id" onChange={(e)=>setUserName(e.target.value)}/><br/>
        <button className="button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};
export default Login;