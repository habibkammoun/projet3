import React from "react";
import { ReactDOM } from "react";
import FormHeader from "./FormHeader";
import { useEffect } from "react";
import OtherMethods from "./OtherMethods"
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from 'react-router-dom'


function RegistreForm(){
 
       
  const nav = useNavigate()
  const [nameCreation, setname] = useState("");
  const [passwordCreation, setpassword] = useState("");
  const [emailCreation, setemail] = useState("");
  async function registerUser(event) {
		event.preventDefault()

		const response = await fetch("http://localhost:3001/insert", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
        nameCreation,
				passwordCreation,
				emailCreation,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
      alert('Account Created successful')
			window.location.href = '/'
		}else{
        alert(data.error);
    }
	}
    return(
      
      <div id="loginform">
        <FormHeader title="Create Account" />
        <div class="row">
    
    
    <label>Username</label>
    <input type="text" placeholder="Type Your Username" id="accUsername" onChange={(event) => {
            setname(event.target.value);
          }} required/>
    <label>Password</label>
    <input type="password" placeholder="Type Your Password" id="accPassword"onChange={(event) => {
            setpassword(event.target.value);
          }} required/>
    <label>email</label>
    <input type="email" placeholder="Type Your Email" id="accEmail"onChange={(event) => {
            setemail(event.target.value);
          }} required/>
  </div> 
  
  <div id="button" class="row">
    <button onClick={registerUser}>{"Register"}</button>
    </div>
  
        <OtherMethods />
      </div>
      
    )
  
  }


export default RegistreForm;