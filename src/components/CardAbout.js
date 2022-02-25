import React from "react";
import { Link } from "react-router-dom";



const CardAbout = ({ name, about, link, image }) => {
  return (
    
        <div className="card">
          <img src={image}  style={{ height: "250px", width: "250px" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title" style={{color:"#610005"}}>{name}</h2>
            <p className="card-text body1">{about}</p>
            <a href={link} target='_blank' className="card-text">github</a>
          </div>
        </div>
  );
};

export default CardAbout;
