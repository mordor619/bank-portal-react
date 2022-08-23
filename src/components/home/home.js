import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import NavbarHomePage from "../NavbarHomePage";
import { AiOutlineArrowUp } from "react-icons/ai";
import { IconContext } from "react-icons";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineGlobal } from "react-icons/ai";
import { GiNetworkBars } from "react-icons/gi";
import FooterHome from "../HomeFooter";


const linkStyle = {
  margin: "5rem",
  textDecoration: "none",
};

function Home() {
  return (
    <div id="homePageDiv">
      <NavbarHomePage />

      <br></br>

      {/* first div with flexbox begins */}
      <div className="d-flex">
        {/* text with button for signup and login */}
        <div className="p-2 flex-fill">
          <p id="homeText">Let's start</p>
          <p id="homeText">something big</p>
          <p id="homeText">
            With us. &nbsp;&nbsp;&nbsp;
            <img src="home/randomlineshomepage.png" alt="lines here" />
          </p>

          <br></br>

          <div>
            <Link to="/register" style={linkStyle}>
              <button className="button-52" role="button">
                Register
              </button>
            </Link>

            <Link to="/login" style={linkStyle}>
              <button className="button-52" role="button">
                Login
              </button>
            </Link>
          </div>
        </div>

        {/* image with cards */}
        <div className="p-2 flex-fill">
          <img
            src="home/cardImageHome.png"
            className="imgHome"
            alt="cards here"
          />
        </div>
      </div>

      {/* first div with flexbox ends */}

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {/* second div with flexbox begins */}

      <div className="d-flex">
        <div className="p-2 flex-fill" style={{ marginTop: "20px" }}>
          <p id="textDiv2">Stay on top of market trends, build</p>
          <p id="textDiv2">your crypto portfolio and execute</p>
        </div>

        <div className="p-2 flex-fill">
          <div className="d-flex" style={{ marginLeft: "300px" }}>
            <div className="p-2 flex-fill">
              <IconContext.Provider value={{ className: "arrow1" }}>
                <AiOutlineArrowUp size={42} />
              </IconContext.Provider>
            </div>

            <div className="p-2 flex-fill">
              <h2>80%</h2>
            </div>
          </div>

          <p id="textDiv3">People trust us</p>
        </div>
      </div>

      {/* second div with flexbox ends */}

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {/* third div with flexbox and black component begins */}

      <div id="blackComp">
        <div className="d-flex" style={{ color: "white" }}>
          {/* 1st part */}

          <div className="p-2 flex-fill" style={{ marginTop: "20px" }}>
            <div className="d-flex" style={{ marginLeft: "25px" }}>
              <div className="p-2 flex-fill">
                <FiMapPin size={42} />
              </div>

              <div className="p-2 flex-fill">
                <h2>
                  Local business<br></br> finance
                </h2>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ marginLeft: "40px", marginTop: "40px" }}>
                "Lorem ipsum dolor sit amet, <br></br>
                consectetur adipiscing elit, <br></br>
                sed do eiusmod tempor incididunt <br></br>
                ut labore et dolore magna aliqua."
              </p>
            </div>
          </div>

          {/* 2nd part */}
          <div className="p-2 flex-fill" style={{ marginTop: "20px" }}>
            <div className="d-flex" style={{ marginLeft: "35px" }}>
              <div className="p-2 flex-fill">
                <AiOutlineGlobal size={42} />
              </div>

              <div className="p-2 flex-fill">
                <h2>
                  Build for global<br></br> payments
                </h2>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ marginLeft: "40px", marginTop: "40px" }}>
                "Lorem ipsum dolor sit amet, <br></br>
                consectetur adipiscing elit, <br></br>
                sed do eiusmod tempor incididunt <br></br>
                ut labore et dolore magna aliqua."
              </p>
            </div>
          </div>

          {/* 3rd part */}
          <div className="p-2 flex-fill" style={{ marginTop: "20px" }}>
            <div className="d-flex" style={{ marginLeft: "25px" }}>
              <div className="p-2 flex-fill">
                <GiNetworkBars size={42} />
              </div>

              <div className="p-2 flex-fill">
                <h2>
                  Make internet of<br></br> money
                </h2>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ marginLeft: "40px", marginTop: "40px" }}>
                "Lorem ipsum dolor sit amet, <br></br>
                consectetur adipiscing elit, <br></br>
                sed do eiusmod tempor incididunt <br></br>
                ut labore et dolore magna aliqua."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* third div with flexbox and black component ends */}

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {/* footer begins */}

      <FooterHome />

      {/* footer ends */}
    </div>
  );
}

export default Home;

//end
