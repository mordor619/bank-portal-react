import React from "react";
import "./home/style.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";


function FooterHome() {
  return (
    <div>
      <div id="footer">
        <footer className="text-white text-center text-lg-start bg-dark">
          {/* <!-- Grid container --> */}
          <div id="subFooter">
            {/* <!--Grid row--> */}
            <div className="row">
              {/* <!--Grid column--> */}
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h5
                  className="text-uppercase mb-4"
                  style={{ marginTop: "10px" }}
                >
                  About company
                </h5>

                <p style={{ color: "white" }}>
                  Established in 2017, We are a mobile banking experience
                  powered by the Gamma app.
                </p>

                <p style={{ color: "white" }}>
                  We give you the best rewards on purchases, reward you for
                  deposits and have none of the most annoying fees charged
                  by traditional banks.
                </p>

                <div style={{ marginBottom: "5px" }}>
                  {/* <!-- Facebook --> */}
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    type="button"
                    className="btn btn-floating btn-light btn-lg"
                    style={{ borderRadius: "50%", marginLeft: "5px" }}
                  >
                    <BsFacebook />
                  </a>
                  {/* <!-- Twitter --> */}
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    type="button"
                    className="btn btn-floating btn-light btn-lg"
                    style={{ borderRadius: "50%", marginLeft: "5px" }}
                  >
                    <AiFillTwitterCircle />
                  </a>
                  {/* <!-- Google + --> */}
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    type="button"
                    className="btn btn-floating btn-light btn-lg"
                    style={{ borderRadius: "50%", marginLeft: "5px" }}
                  >
                    <AiFillGooglePlusCircle />
                  </a>
                  {/* <!-- Linkedin --> */}
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    type="button"
                    className="btn btn-floating btn-light btn-lg"
                    style={{ borderRadius: "50%", marginLeft: "5px" }}
                  >
                    <AiFillLinkedin />
                  </a>
                </div>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <br></br>
                <br></br>
                <br></br>

                <ul
                  className="fa-ul"
                  style={{ listStyleType: "none", marginLeft: "1.65em" }}
                >
                  <li style={{ color: "white" }} className="mb-3">
                    <p>
                      <AiFillHome />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chennai, Tamil Nadu
                    </p>
                  </li>
                  <li style={{ color: "white" }} className="mb-3">
                    <p>
                      <AiOutlineMail />
                      &nbsp;&nbsp;contact@banksrus.com
                    </p>
                  </li>
                  <li style={{ color: "white" }} className="mb-3">
                    <p>
                      <AiFillPhone />
                      <span style={{ marginLeft: "65px" }}>+ 11 234 66 98</span>
                    </p>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5
                  className="text-uppercase mb-4"
                  style={{ marginTop: "10px" }}
                >
                  Opening hours
                </h5>

                <table className="table text-center text-white">
                  <tbody className="fw-normal">
                    <tr>
                      <td>Mon - Thu:</td>
                      <td>9am - 9pm</td>
                    </tr>
                    <tr>
                      <td>Fri - Sat:</td>
                      <td>9am - 1pm</td>
                    </tr>
                    <tr>
                      <td>Sunday:</td>
                      <td>Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}
          </div>
          {/* <!-- Grid container --> */}

          {/* <!-- Copyright --> */}
          <div className="text-center p-3" style={{ backgroundColor: "black" }}>
            © 2022 Copyright:&nbsp;
            <a className="text-white" href="#">
              banksrus.com
            </a>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
      </div>
      {/* <!-- End of .container --> */}
    </div>
  );
}

export default FooterHome;

//end
