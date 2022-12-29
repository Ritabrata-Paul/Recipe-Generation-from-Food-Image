import React from "react";
import Subhead from "../../Subhead/Subhead";
import "./styles.css";

function Exp(){
  return(
    <div className="exp">
      <Subhead title="User experiences"/>
        <div className="Experience1">
          <img className="avatar" src="img/avatar.png" alt="avatar"/>
          <div className="card">
            <p>This site was recommended to me by a friend. Now I am able to make different types of cuisine and my friends and family love it.</p>
            <p>-Maya</p>
          </div>
        </div>
        {/* <div className="Experience2">
          <img className="avatar2" src="img/avatar2.png" alt="avatar"/>
          <div className="card2">
            <p>This site is just awsome.</p>
            <p>-Rohan</p>
          </div>
        </div> */}
    </div>
  )
}

export default Exp;
