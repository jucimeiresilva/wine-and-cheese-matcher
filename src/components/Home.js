import React from "react";
import { Link } from "react-router-dom";
import App from "../App";


const Home = () => {
  return (
    <>
      <div className="container" style={{ border: "solid black 2px" }}>
        <p> WELCOME, </p>
        <p> FIND THE PERFECT </p>
        <h3> WINE AND CHEESE </h3>
        <p> MATCH! </p>

        
        <button>
          
          <Link to={"/wines"}> SEE WINE LIST</Link>

          
        </button>
        
      </div>
    </>
  );
};

export default Home;
