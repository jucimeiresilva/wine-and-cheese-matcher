import React from "react";
import Footer from "./Footer";
import App from "../App";
import CardAbout from "./CardAbout";


const About = () => {
    return(
        <>
        <div className="container" style={{border:"solid black 2px"}}>
            <h1>ABOUT</h1>
            <h3>SHORT DESCRIPTION ABOUT THE PROJECT</h3>
            <CardAbout/>
                
            
        </div>
        </>

        
    );
};




export default About;