import React, { useState } from "react";
import SignupLoginModal from "../SignupLoginModal";
import Axios from "axios";

const Nav = (props) => {
  const [show, setShow] = useState(false);

  const imgStyle = {
    width: "65px",
    height: "65px",
    margin: "0px 10px 25px 0px",
    position:"absolute"
  }
  const wordStyle = {
    position:"relative",
    padding: "12px 0px 0px 75px",
    color: "cornsilk",
    fontSize: "30px",
    fontFamily: "Chalkduster, fantasy"
  }
  const navStyle ={
    boxShadow: "0px 5px 10px 5px pink",
    marginBottom: "20px"
  }

  return (
    <nav 
    className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top"
    style= {navStyle}
    >
      <a 
        className="navbar-brand" 
        href="/"
        
      >
        <img src="../img/quokka-logo.png" 
          alt="logo"
          style={imgStyle} 
        />
           <p style={wordStyle}>quokka</p>
      </a>
      <p>{props.userName}</p>
      
      <SignupLoginModal show={show} setShow={setShow} />

      {props.userName === 'guest' && 
        <button onClick={() => setShow(true)}>Login</button>
      }
      {props.userName !== 'guest' && 
        <button onClick={() => Axios.get('/api/auth/logout')}>Logout</button>
      }
    </nav>
    
  );
}

export default Nav;
