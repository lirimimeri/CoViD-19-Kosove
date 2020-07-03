import React from "react";
import "./footer.styles.css"

function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="col">
          <a><i className="fas fa-envelope" /></a>
        </div>
        <div className="col">
          <a href="https://github.com/lirimimeri"><i className="fab fa-github" /></a>
        </div>
        <div className="col">
          <a href="https://www.facebook.com/lirimimeri1">
            <i className="fab fa-facebook"/>
            </a>
          
        </div>
      </div>
      <div className="footer-copyright text-center">
        © 2020 Copyrights Reserved
      </div>
    </div>
  );
}

export default Footer;
