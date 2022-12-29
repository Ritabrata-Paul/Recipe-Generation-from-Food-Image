import React from "react";
import Subhead from "../Subhead/Subhead";
import "./styles.css";

function Contact(){
  return(
    <div className="contact">
      <Subhead title="Contact"/>
      <div>
        <a href="https://www.facebook.com/ritabrata.paul.58" className="icon fab fa-facebook fa-2x"></a>
        <a href="https://www.linkedin.com/in/ritabrata-paul-23a75919a/" className="icon fab fa-linkedin fa-2x"></a>
        <a href="https://www.instagram.com/paul__ritabrata/" className="icon fab fa-instagram fa-2x"></a>
      </div>
    </div>
  )
}

export default Contact;
