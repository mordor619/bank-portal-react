import React from "react";
import FooterHome from "../HomeFooter";
import NavbarHomePage from "../NavbarHomePage";
import "./styles.css";

function Contact() {
  return (
    <div id="contactPageDiv">
      <NavbarHomePage />

      <br></br>

      {/* black component */}
      <div className="d-flex">
        <div className="p-2 flex-fill">
          <div className="contactComp">

            <br></br>
            
            <span>
            <h3 className="headCont">Contacts</h3>

            <div id="whiteComp"></div>
            </span>
            
            <br></br>

            <span className="subHeadCont">City:</span>
            <br></br>
            <span className="subTextCont">Chennai</span>

            <br></br>
            <br></br>

            <span className="subHeadCont">Head Office:</span>
            <br></br>
            <a className="linkSocial" target="_blank" href="https://www.google.com/maps/place/Kanini+Software+Solutions+India+Private+Limited/@12.9061954,80.2237317,17z/data=!3m1!4b1!4m5!3m4!1s0x3a525d97c837366b:0xd99f0e98308ef647!8m2!3d12.9061902!4d80.2259204">
            <span className="subTextCont">Tower A, 1st Floor, 51,</span>
            <br></br> 
            <span className="subTextCont">Ratha Tek Meadows Rd, Elcot Sez,</span>
            <br></br> 
            <span className="subTextCont">Sholinganallur - 600119</span>
            </a>

            <br></br>
            <br></br>

            <span className="subHeadCont">Phone:</span>
            <br></br>
            <span className="subTextCont">+ 11 234 66 98</span>

            <br></br>
            <br></br>

            <span className="subHeadCont">Social:</span>
            <br></br>
            <span className="subTextCont">
                <a className="linkSocial" target="_blank" href="https://in.linkedin.com/">linkedin</a>
            </span>
            <span className="subTextCont">
                <a className="linkSocial" target="_blank" href="https://discord.com/">discord</a>
            </span>


          </div>
        </div>

        <div className="p-2 flex-fill">
          <img src="bgMapImg.png" className="bgTitle" alt="maps here" />
        </div>
      </div>
      {/* black component ends */}

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

export default Contact;

//end
