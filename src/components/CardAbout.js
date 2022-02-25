import React from "react";
import { Link } from "react-router-dom";

const CardAbout = ({ name, about, link, image }) => {
  return (
    <div className="card">
      <img
        src={image}
        style={{ height: "220px", width: "268px", left: "160px", top: "345px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text subtitle">{about}</p>
        <div className="github-img">
          <a href={link} target="_blank" className="card-text">
            github
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardAbout;
