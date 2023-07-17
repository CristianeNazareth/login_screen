import React from "react";
import './Login.css';
// import ButtonSocial from '../ButtonSocial/ButtonSocial.jsx';
import Footer from '../Footer/Footer'

const Login = () => {
  return (
    <div className="box-login">
      <div className="login-z">
        <p>PD</p>
        <hr className="line" />
        <p>ID</p>
      </div>
      <div className="wrapper-login">
        <button className="login-btn">LOGIN</button>
        <div className="wrapper-text">
          <p>SIGN IN</p>
          <p>FORGET?</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}


export default Login;