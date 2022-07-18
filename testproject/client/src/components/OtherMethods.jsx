import React from "react";
import ReactDOM from "react-dom";
import Facebook from "./Facebook";
import Twitter from "./Twitter";
import Google from "./Google";
import './styles.css';

const OtherMethods = props => (
    <div id="alternativeLogin">
      <label>Or sign in with:</label>
      <div id="iconGroup">
        <Facebook />
        <Twitter />
        <Google />
      </div>
    </div>
    );
export default OtherMethods;