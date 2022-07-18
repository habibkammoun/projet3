import React from "react";
import ReactDOM from "react-dom"
import Skeleton from "../Pages/Skeleton";
import {useNavigate } from "react-router-dom"


function FormButton(props){
    let navigate =useNavigate();
    return(<div id="button" class="row">
    <button onClick={()=>navigate("/Skeleton")}>{props.title}</button>
    </div>)
}

export default FormButton;