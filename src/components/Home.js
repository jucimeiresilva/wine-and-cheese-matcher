import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container home-div">
        <div className="home-text">
          <h2> WELCOME, </h2>
          <div>
            <h1> FIND THE PERFECT </h1>
            <h1>
              {" "}
              <b>WINE & CHEESE</b>{" "}
            </h1>
            <h1> MATCH! </h1>
          </div>

          <Link className="link wine-link" to={"/wines"}>
            <button className="wine-list-btn"> SEE WINE LIST</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
