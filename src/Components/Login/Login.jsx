import React from "react";
import './Login.css';
import ButtonSocial from '../ButtonSocial/ButtonSocial';

const Login = () => {
  return (

    <div className="box-login">
      <div className="login-z">
        <p>PD</p>
        <hr className="line" />
        <p>ID</p>
        </div>

        <div className="wrapper">
          <button className="login-btn">LOGIN</button>
          <div className="wrapper-text">
            <p>SIGN IN</p>
            <p>FORGET?</p>
          </div>
        </div>
          <ButtonSocial></ButtonSocial>

    </div>
  )
}

export default Login;