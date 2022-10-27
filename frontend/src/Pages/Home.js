import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <div className="content">
        <div className="content1">
          <Link to="/handicraft">
            <div className="div1">
              <img
                src="/assets/frame.png"
                className="Navbar_image"
                alt="logo"
              ></img>
              <div className="text1">HANDICRAFT</div>
            </div>
          </Link>
          <Link to="/painting">
            <div className="div2">
              <img
                src="/assets/frame.png"
                className="Navbar_image"
                alt="logo"
              ></img>
              <div className="text2">PAINTINGS</div>
            </div>
          </Link>
          <Link to="/digitalart">
            <div className="div3">
              <img
                src="/assets/frame.png"
                className="Navbar_image"
                alt="logo"
              ></img>
              <div className="text3">DIGITAL ART</div>
            </div>
          </Link>
        </div>
        <div className="content2">
          <img
            src="/assets/illustration.jpg"
            className="Navbar_image"
            alt="illustration"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
