import React from "react";
import { Navbar } from "responsive-navbar-react";
import "responsive-navbar-react/dist/index.css";

const NavbarHomePage = () => {
  const props = {
    items: [
      {
        text: "About",
        link: "/about",
      },
      {
        text: "Contact",
        link: "/contact",
      }
    ],
    logo: {
      text: "Banks-R-Us.",
      link: "/",
    },
    style: {
      logoStyles: {
        fontWeight: "bold",
        fontSize: "35px",
        color: "black",
      },
      barStyles: {
        fontFamily: "Monospace",
      },
      sidebarStyles: {
        background: "white",
      },
      linkStyles: {
        fontWeight: "100",
        fontSize: "25px",
        margin: "30px",
        color: "black",
      }
    },
  };
  return <Navbar {...props} />;
};

export default NavbarHomePage;
