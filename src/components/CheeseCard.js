import React from "react";

const CheeseCard = ({ cheeseName, img }) => {
  return (
    <div className= "card" style={{ height: "250px"}}>
      <img src={img} style={{ height: "200px", width: "auto" }} className="card-img-top" alt={cheeseName} />
      <div className="card-body">
        <h5 className="card-title">{cheeseName}</h5>
      </div>
    </div>
  );
};

export default CheeseCard;
