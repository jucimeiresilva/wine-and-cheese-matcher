import React from "react";

const WineCard = ({ Name, Winery, Country, Type, vintage, rating }) => {
  return (
    <>
      <div className="card mb-3 ms-5 col">
        <div className="row g-0">
          <div className="col-2">
            <img
              src="https://shop.foleyfoodandwinesociety.com/assets/images/products/pictures/8174-560.png"
              className="img-fluid rounded-start ms-5 "
              alt={`${Name} bottle`}
              style={{ width: "80px"}}
            />
          </div>
          <div className="col-md">
            <div className="card-body">
              <h5 className="card-title mb-4"> { Name } </h5>
              <div className="row">
                <p className="card-text col">Winery: {Winery} </p>
                <p className="card-text col">Country: {Country} </p>
              </div>   
              <div className="row">
                <p className="card-text col">Type: {Type} </p>
                <p className="card-text col">Year: {vintage} </p>
              </div>
              <div className="row">
                <p className="card-text col">Rating: {rating.toFixed(1)} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WineCard;
