import React, { useState, useEffect } from "react";
import logo from "../src/img/logo.png";
import "./NavCSS.css";

function Nav() {
  const [show, handelshow] = useState(false);

  useEffect(()=>{
      window.addEventListener('scroll' ,()=>{
          if( window.scrollY >100){
              handelshow(true)
          }else{
              handelshow(false)
          }
      });
      return ()=>{
        window.removeEventListener('scroll')
      }

  } , []);
  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img src={logo} alt="logo" className="nav_logo" />
    </div>
  );
}

export default Nav;
