import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const linkStyle = {
  margin: "5rem",
  textDecoration: "none",
};

function Home() {
  return (
    <div>
      <br></br>

      <h1>Welcome to EazyBank!</h1>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div>
        <Link to="/register" style={linkStyle}>
          <button class="button-52">
            Register
          </button>
        </Link>

        <Link to="/login" style={linkStyle}>
          <button class="button-52">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

//end
