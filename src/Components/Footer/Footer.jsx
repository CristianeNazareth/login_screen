import React from "react";
import './Footer.css';
import ButtonSocial from '../ButtonSocial/ButtonSocial'
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoGoogle } from "react-icons/bi";


const Footer = () => {
  return (

    <footer className="footer-icon">
      <ButtonSocial icon={<BiLogoFacebook className="buttonSocial-icon"/>} />
      <ButtonSocial icon={<BiLogoTwitter className="buttonSocial-icon"/>} />
      <ButtonSocial icon={<BiLogoGoogle className="buttonSocial-icon"/>} />
    </footer>


  )
}

export default Footer;
