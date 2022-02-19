import React from "react";

const CheeseCard = ({ cheeseName }) => {
  return (
    <div className= "card" style={{ height: "300px"}}>
      <img src="./image/cheese.png" style={{ height: "300px", width: "300px" }} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{cheeseName}</h5>
      </div>
    </div>
  );
};

export default CheeseCard;
