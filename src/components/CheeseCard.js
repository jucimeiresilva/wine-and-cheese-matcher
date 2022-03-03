import React from "react";
import "./CheeseCard.css";

const CheeseCard = ({ cheeseName, img }) => {
  return (
    <div className="card cheese-card">
      <div className="card-body d-flex flex-column justify-content-end">
        <div>
          <img
            src={img}
            className="card-img-top mx-auto my-auto cheese-img"
            alt={cheeseName}
          />
        </div>
        <div>
          <h5 className="card-title subtitle mt-2">{cheeseName}</h5>
        </div>
      </div>
    </div>
  );
};

export default CheeseCard;
