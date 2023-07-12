import './App.css'
import React from 'react'
import Header from './Components/Header/Header.jsx'
import Hero from './Components/Hero/Hero.jsx'
import ButtonSocial from './Components/ButtonSocial/ButtonSocial.jsx';
import './styles/variables.css';
import Login from './Components/Login/Login.jsx';
import ButtonLogin from './Components/ButtonLogin/ButtonLogin';
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoGoogle } from "react-icons/bi";


const App = () => {
  return (

      <React.Fragment>

        <Header></Header>
        <Hero />

        <Login />
        <ButtonLogin />


        <footer>
          <ButtonSocial icon={<BiLogoFacebook />} />
          <ButtonSocial icon={<BiLogoTwitter />} />
          <ButtonSocial icon={<BiLogoGoogle />} />
        </footer>


      </React.Fragment>
  )
}

export default App;
