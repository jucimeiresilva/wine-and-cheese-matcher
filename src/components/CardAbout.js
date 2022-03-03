import React from "react";
import { Link } from "react-router-dom";

const CardAbout = ({ name, about, link, image }) => {
  return (
    <div>
      <img
        src={image}
        style={{ height: "220px", maxWidth: "268px", objectFit:"cover", objectPosition:"0px 1px"}}
        className="card-img-top"
        alt="..."
      />
      <div>
        <h2 className="mt-4 mb-2">{name}</h2>
        <p className="subtitle" style={{ width: "450px"}}>{about}</p>
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
