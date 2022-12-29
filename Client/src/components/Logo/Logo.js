import React from "react";
import "./styles.css";
import { Link } from "react-router-dom"; 

function Logo(){
  return(
    <div className="logo1">
     <div className="logo2">
      <Link to="/">R</Link>
     </div>
    </div>
  )
}

export default Logo;
