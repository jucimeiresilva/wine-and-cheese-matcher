import React from "react";
import "./WineList.css";

const WineCard = ({ Name, Winery, Country, Type, vintage, rating, id }) => {
  return (
    <>
      <div className="card mb-3 col wine-hover">
        <div className="row g-0">
          <div className="col-2 ps-1">
            <img
              src={
                Type === "Red"
                  ? "https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/23531-01.png"
                  : Type === "White"
                  ? "https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/23760-01.png"
                  : "https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/26830-01.png"
              }
              className={`img-fluid mt-3 ms-5`}
              alt={`${Name} bottle`}
              style={{ width: "auto", height: "180px" }}
            />
          </div>
          <div
            className="col-md d-flex flex-column"
            style={{ padding: "24px 16px 24px 0px" }}
          >
            <div className="card-body ms-2">
              <div className="d-flex align-items-start justify-content-between">
                <h3 className="card-title mb-4"> {Name} </h3>
              </div>
              <div className="card-details d-flex">
                <div className="d-flex flex-column col-3 card-column justify-content-between">
                  <div>
                    <span className="subtitle me-1">Type</span>
                    <span className="body2">{Type}</span>
                  </div>
                  <div>
                    <span className="subtitle me-1">Year</span>
                    <span className="body2">{vintage}</span>
                  </div>
                </div>
                <div className="d-flex flex-column col-3 card-column justify-content-between">
                  <div>
                    <span className="subtitle me-1">Country</span>
                    <span className="body2">{Country}</span>
                  </div>

                  <div>
                    <span className="subtitle me-1">Winery</span>
                    <span className="body2">{Winery}</span>
                  </div>
                </div>
                <div className="d-flex align-items-start col-3 card-column mt-1">
                  <span className="subtitle me-1">Rating</span>
                  <span className="body2" style={{marginTop:"-1px"}}>{rating.toFixed(1)} </span>
                </div>
                <div className="d-flex flex-column col-3 card-column">
                  <div className="matching-div">
                    <span className="me-1 matching">11</span>
                    <p className="body2">Matching</p>
                    <p className="body2" style={{ marginTop: "-18px" }}>
                      Cheese
                    </p>
                  </div>
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
