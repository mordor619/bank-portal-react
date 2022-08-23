import React from "react";
import NavbarHomePage from "../NavbarHomePage";
import "./styles.css";
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaWallet } from "react-icons/fa";
import { TbSettingsAutomation } from "react-icons/tb";
import { MdMonitor } from "react-icons/md";
import { FaHandHoldingUsd } from "react-icons/fa";
import { TbMessage2Code } from "react-icons/tb";
import { FaPiggyBank } from "react-icons/fa";
import FooterHome from "../HomeFooter";

function About() {
  return (
    <div id="aboutPageDiv">
      <NavbarHomePage />

      <br></br>

      {/* first div with flexbox begins */}
      <div className="d-flex">
        <div className="p-2 flex-fill">
          <img
            src="aboutPageTitleImg.png"
            className="aboutPageTitleImg"
            alt="ai bank here"
          />
        </div>

        <div className="p-2 flex-fill">
          <p id="aboutText">The Most</p>
          <p id="aboutText">Sophisticated</p>
          <p id="aboutText">Banking Ever</p>

          <hr id="horiLine"></hr>
          <br></br>

          <p id="subText">We priortize in simplicity and flexibility that</p>
          <p id="subText">make each of your transactions more stylish</p>

          <br></br>
          <br></br>

          <Link to="/">
            <button className="button-85" role="button">
              Get it Now
            </button>
          </Link>

          <Link to="/">
            <button className="borderlessBtn" role="button">
              How it Works <HiArrowSmRight />{" "}
            </button>
          </Link>
        </div>
      </div>

      {/* first div with flexbox ends */}

      <br></br>

      {/* second div */}
      <div id="blackComp2">
        <div className="d-flex">
          <div style={{ marginLeft: "125px" }} className="p-2 flex-fill">
            <span id="text1">8K</span>&nbsp;<span id="plus1">+</span>
            <br></br>
            <span id="text2">Happy</span>
            <br></br>
            <span id="text2">Customers</span>
          </div>

          <div style={{ marginLeft: "180px" }} className="p-2 flex-fill">
            <span id="text1">24</span>&nbsp;<span id="plus1">+</span>
            <br></br>
            <span id="text2">Awards</span>
            <br></br>
            <span id="text2">Winning</span>
          </div>

          <div style={{ marginLeft: "180px" }} className="p-2 flex-fill">
            <span id="text1">28</span>&nbsp;<span id="plus1">+</span>
            <br></br>
            <span id="text2">Years of</span>
            <br></br>
            <span id="text2">Experience</span>
          </div>
        </div>
      </div>

      {/* second div ends */}

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {/* third div */}

      <div id="thirdDivStart">
        <span>BanksRUs </span>
        <span id="rainbowTxt">understands</span>
        <p>all your needs</p>
      </div>

      <br></br>

      <div className="thirdDiv">
        {/* feature list 1 */}
        <div className="d-flex">
          <div
            style={{
              height: "150px",
              width: "200px",
              margin: "30px",
              marginLeft: "80px",
              marginTop: "40px",
            }}
            className="p-2 flex-fill"
          >
            <div class="hoverEffectDiv">
              <span>
                <FaWallet size={50} />
              </span>
              <br></br>
              <br></br>
              <span id="feature1">Dedicated</span>
              <p id="feature1">Digital Wallet</p>
            </div>
          </div>

          <div
            style={{
              height: "150px",
              width: "200px",
              margin: "30px",
              marginLeft: "80px",
              marginTop: "40px",
            }}
            className="p-2 flex-fill"
          >
            <div class="hoverEffectDiv">
              <span>
                <TbSettingsAutomation size={50} />
              </span>
              <br></br>
              <br></br>
              <span id="feature1">Automatic Bill</span>
              <p id="feature1">Payments</p>
            </div>
          </div>

          <div
            style={{
              height: "150px",
              width: "200px",
              margin: "30px",
              marginLeft: "80px",
              marginTop: "40px",
            }}
            className="p-2 flex-fill"
          >
            <div class="hoverEffectDiv">
              <span>
                <MdMonitor size={50} />
              </span>
              <br></br>
              <br></br>
              <span id="feature1">Financial</span>
              <p id="feature1">Planning</p>
            </div>
          </div>
        </div>

        <br></br>

        {/* feature list 2 */}

        <div className="d-flex">
          <div
            style={{
              height: "150px",
              width: "200px",
              margin: "30px",
              marginLeft: "80px",
            }}
            className="p-2 flex-fill"
          >
            <div class="hoverEffectDiv">
              <span>
                <FaHandHoldingUsd size={50} />
              </span>
              <br></br>
              <br></br>
              <span id="feature1">Loyalty</span>
              <p id="feature1">Programs</p>
            </div>
          </div>

          <div
            style={{
              height: "150px",
              width: "200px",
              margin: "30px",
              marginLeft: "80px",
            }}
            className="p-2 flex-fill"
          >
            <div class="hoverEffectDiv">
              <span>
                <TbMessage2Code size={50} />
              </span>
              <br></br>
              <br></br>
              <span id="feature1">Secure Message</span>
              <p id="feature1">Alerts</p>
            </div>
          </div>

          <div
            style={{
              height: "150px",
              width: "200px",
              margin: "30px",
              marginLeft: "80px",
            }}
            className="p-2 flex-fill"
          >
            <div class="hoverEffectDiv">
              <span>
                <FaPiggyBank size={50} />
              </span>
              <br></br>
              <br></br>
              <span id="feature1">Secure Online</span>
              <p id="feature1">Banking</p>
            </div>
          </div>
        </div>
      </div>

      {/* third div ends */}

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

export default About;

//end
