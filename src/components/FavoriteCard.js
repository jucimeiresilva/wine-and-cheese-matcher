import React from "react";
import starOn from "../assets/Property 1=on.png";
// import starOff from "../assets/Property 1=off.png";

const FavoriteCard = () => {
  return (
    <div className="" style={{ maxWidth: "836px" }}>
      <div className="card mb-3">
        <div className="row g-0 d-flex align-items-center">
          <div className="col-md-2">
            <img
              src="https://www.crystalimagesinc.com/wp-content/uploads/wine_cake_heart05-1.jpg"
              className="img-fluid rounded-start ms-2"
              alt="wine bottle"
            />
          </div>
          <div className="col-md ms-2">
            <div className="card-body d-flex flex-column">
              <div className="d-flex justify-content-between">
                <h3>
                  Weinkellerei Am Klostergarten Wollsteiner Rheingrafenstein
                  Spatlese Kerner 2016
                </h3>
                <div className="me-5">
                  <img src={starOn} alt="Favorited" className="favorite-star" />
                </div>
              </div>
              <div className="container d-flex px-1">
                <div className="container d-flex col-10 align-items-center">
                  <div className="d-flex flex-column col-2 card-column ">
                    <span className="matching"> 10 </span>
                    <span className="body2" style={{ width: "80px" }}>
                      Matching Cheese
                    </span>
                  </div>
                  <div className="d-flex flex-column col card-column justify-content-between ">
                    <span className="body2" style={{ width: "120px" }}>
                      Lüneberg cheese
                    </span>
                    <span className="body2" style={{ width: "120px" }}>
                      Lüneberg cheese
                    </span>
                  </div>
                  <div className="d-flex flex-column col card-column justify-content-between ">
                    <span className="body2" style={{ width: "120px" }}>
                      Lüneberg cheese
                    </span>
                  </div>
                </div>
                <div className="d-flex flex-column col-2 card-column justify-content-end ms-5">
                  <span className="subtitle">view all</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;