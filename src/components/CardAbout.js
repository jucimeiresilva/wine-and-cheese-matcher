import React from "react";
import './CardAbout.css'


const CardAbout = ({ name, about, link, image }) => {
  return (
    <div>
      <img
        src={image}
        className="card-img-top img-about"
        alt="..."
      />
      <div>
        <h2 className="mt-4 mb-2">{name}</h2>
        <p className="subtitle about-text">{about}</p>
        <div className="github-img">
          <a href={link} target="_blank">
            {`github/${name}`}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardAbout;
