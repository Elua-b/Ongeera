import React from "react";
import "./Footer.css";
import "../About/About.css";
function Footer() {
  return (
    <div className="footer">
      <div className="f-left">
        <div className="item">
          <div className="logo">
            <img src="/logo.png" className="logo" alt="" />
          </div>
          <div className="logo-name">
            Onge
            <span
              style={{ color: "green", fontSize: "40px", marginTop: "-10px" }}
            >
              e
            </span>
            ra
          </div>
        </div>

        <div className="f-par spcl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          accusamus, iusto tempora ipsa necessitatibus hic. Quam provident
          commodi, eum repellendus non doloremque! Perferendis error cum modi
          quam non cupiditate vitae.
        </div>
        <div className="join">
          <img src="/inst.jpg" className="icon" alt="" />
          <img src="/face.jpg" className="icon" alt="" />
          <img src="/twitter.jpg" className="icon" alt="" />
          <img src="/utube.jpg" className="icon" alt="" />
        </div>
        <div className="f-copyright" style={{ fontSize: "10px" }}>
          <b>BUGINGOEloi</b>
          <span style={{ marginTop: "20px" }}>
            <img className="copy" src="/copyright.png" alt="" />
          </span>
          Ongeera All rights reserved Copyrights 2022
        </div>
      </div>
      <div className="f-right">
        <h2  style={{padding:"10px"}}>Be Informed</h2>
        <h5  style={{padding:"10px"}}>Sign up for updates</h5>
        <p className="spcl"  style={{padding:"20px"}}>
          commodi, eum repellendus non doloremque! Perferendis error cum modi
          quam
        </p>
        <p className="spcl"  style={{padding:"20px"}}>Perferendis error cum modi quam</p>
        <input type="email" placeholder="Email"  style={{padding:"20px"}} />
        <button className="f-btn" style={{padding:"20px",marginTop:"20px"}}>Submit Now</button>
      </div>
    </div>
  );
}

export default Footer;
