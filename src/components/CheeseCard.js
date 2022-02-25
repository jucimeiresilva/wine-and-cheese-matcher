import React from "react";

const CheeseCard = ({ cheeseName, img }) => {
  return (
    <div className="card" style={{ height: "250px", textAlign: "center", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.08)" }}>
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
          <h5 className="card-title subtitle mt-2">
            {cheeseName}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CheeseCard;
