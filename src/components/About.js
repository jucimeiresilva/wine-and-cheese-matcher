import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import CardAbout from "./CardAbout";
import axios from "axios";

const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const getInformationAbout = async () => {
      const { data } = await axios.get(
        `https://ironrest.herokuapp.com/aboutprojeto2/`
      );
      const students = data[0].students;
      setAbout(students);
    };
    getInformationAbout();
  }, []);

  return (
    <>
      <div className="container">
        <h1>ABOUT</h1>
        <h3 className="mt-2 mb-4">
          Project in React.JS for the IronHack Bootcamp, we developed an
          application to present a cheese for your wine.
        </h3>

        {about.length && (
          <div className="row col-12 g-4">
            <div className="col-6">
              <CardAbout
                name={about[0].name}
                about={about[0].about}
                link={about[0].link}
                image="./image/felipe.jpeg"
              />
            </div>
            <div className="col-6">
              <CardAbout
                name={about[1].name}
                about={about[1].about}
                link={about[1].link}
                image="./image/ju.jpg"
              />
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
};

export default About;
