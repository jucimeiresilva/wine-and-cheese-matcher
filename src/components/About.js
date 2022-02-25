import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import App from "../App";
import CardAbout from "./CardAbout";
import axios from "axios";

const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const getInformationAbout = async () => {
      const { data } = await axios.get(`http://ironrest.herokuapp.com/aboutprojeto2`);
        const students = data[0].students
      setAbout(students);
    };
    getInformationAbout();
  }, []);

  return (
    <>
      <div className="container" style={{ border: "solid black 2px" }}>
        
        <h1>ABOUT</h1>
        <h3>SHORT DESCRIPTION ABOUT THE PROJECT</h3>
        {about.length ?
        <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
       <CardAbout name={about[0].name} about={about[0].about} link={about[0].link} image='./image/felipe.jpg'/>
        <CardAbout name={about[1].name} about={about[1].about} link={about[1].link} image='./image/ju.jpg'/> </div> </div>
        : console.log("não funcionou")}
      </div>
    </>
  );
};

export default About;


