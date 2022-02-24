import React from "react";

const CheeseCard = ({ cheeseName, img }) => {
  return (
    <div className="card" style={{ height: "250px", textAlign: "center" }}>
      <div className="card-body d-flex flex-column justify-content-end">
        <div>
          <img
            src={img}
            style={{ maxHeight: "180px", maxWidth: "200px" }}
            className="card-img-top mx-auto my-auto"
            alt={cheeseName}
          />
        </div>
        <div>
          <h5 className="card-title">
            {cheeseName}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CheeseCard;
