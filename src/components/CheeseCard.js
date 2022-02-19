import React from "react";

const CheeseCard = ({ cheeseName }) => {
  return (
    <div className= "card col-4" style={{ height: "300px", border: "black solid 2px" }}>
      <img src="./image/cheese.png" style={{ height: "300px", width: "300px" }} class="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{cheeseName}</h5>
      </div>
    </div>
  );
};

export default CheeseCard;
