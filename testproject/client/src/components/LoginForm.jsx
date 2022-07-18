import React from "react";
import { ReactDOM } from "react";
import FormHeader from "./FormHeader";
import { useEffect } from "react";
import OtherMethods from "./OtherMethods"
import { useState } from "react";
import Axios from "axios";
import FormButton from "./FormButton";
import FormCreateAccount from "./FormCreateAccount";
function LoginForm ()
{
       
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:3001/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/Skeleton'
		} else {
			alert('Please check your username and password')
		}
	}
      return(
          <div id="loginform">
          <form onSubmit={loginUser}>

          <FormHeader title="Login" />
          <div class="row">
      
      
      <label>Username</label>
      <input type="text" onChange={(event) => {
            setname(event.target.value);
          }} placeholder="Type Your Username" required/>
      <label>Password</label>
      <input type="password" onChange={(event) => {
            setpassword(event.target.value);
          }} placeholder="Type Your Password" required/>
    </div> 
    
    <div id="button" class="row">
    <button type="submit">{"Login"}</button>
    </div>    <FormCreateAccount/> 
          <OtherMethods />
          </form>
        </div>
        
      )
    }
    

export default LoginForm;