import React from "react";
import { Link } from "react-router-dom";

const CardAbout = ({ name, about, link, image }) => {
  return (
    <div>
      <img
        src={image}
        style={{ height: "220px", width: "268px", left: "160px", top: "345px" }}
        className="card-img-top"
        alt="..."
      />
      <div>
        <h2>{name}</h2>
        <p className="subtitle">{about}</p>
        <div className="github-img">
          <a href={link} target="_blank">
            github
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardAbout;
