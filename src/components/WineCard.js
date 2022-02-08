import React from "react";
import starOn from "../assets/Property 1=on.png";
import starOff from "../assets/Property 1=off.png";
import "./WineList.css";

const WineCard = ({ Name, Winery, Country, Type, vintage, rating }) => {
  return (
    <>
      <div className="card mb-3 col">
        <div className="row g-0">
          <div className="col-3">
            <img
              src="https://shop.foleyfoodandwinesociety.com/assets/images/products/pictures/8174-560.png"
              className="img-fluid ms-5 me-1 "
              alt={`${Name} bottle`}
              style={{ width: "80px" }}
            />
          </div>
          <div className="col-md">
            <div className="card-body ms-2">
              <div
                className="d-flex align-items-start justify-content-between"
              >
                <h3 className="card-title mb-4"> {Name} </h3>
                <div className="me-5">
                  <img src={starOn} alt="Favorited" className="favorite-star" />
                </div>
              </div>
          
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default WineCard;
