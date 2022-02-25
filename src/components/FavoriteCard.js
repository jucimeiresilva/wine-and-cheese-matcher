import React from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

const FavoriteCard = ({ Name, Type, id }) => {
  return (
    <div className="wine-hover" style={{ maxWidth: "836px" }}>
      <div className="card mb-3">
        <div className="row g-0 d-flex align-items-center">
          <div className="col-md-2">
            <img
              src={
                Type === "Red"
                  ? "https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/23531-01.png"
                  : Type === "White"
                  ? "https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/23760-01.png"
                  : "https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/26830-01.png"
              }
              className="img-fluid rounded-start ms-2"
              alt="wine bottle"
            />
          </div>
          <div className="col-md ms-2">
            <div className="card-body d-flex flex-column">
              <div className="d-flex justify-content-between">
                <h3>{Name}</h3>
                <FavoriteButton id={id} favorites={"star-fav"} />
              </div>
              <div className="container d-flex px-1">
                <div
                  className="container d-flex col-12 align-items-center"
                  style={{
                    background: "rgba(97, 0, 5, 0.1)",
                    borderRadius: "4px",
                    height:"92px",
                    padding:"8px"
                  }}
                >
                  <div className="d-flex flex-column col-2 card-column">
                    <span className="matching"> 11 </span>
                    <span className="subtitle" style={{ width: "80px" }}>
                      Matching Cheese
                    </span>
                  </div>
                  <div className="d-flex flex-column col card-column justify-content-between ">
                    <span className="body2" style={{ width: "120px" }}>
                      Camembert
                    </span>
                    <span className="body2" style={{ width: "120px" }}>
                      Brie
                    </span>
                  </div>
                  <div className="d-flex flex-column col card-column justify-content-between ">
                    <span className="body2" style={{ width: "120px" }}>
                      Roquefort
                    </span>
                    <span className="body2" style={{ width: "120px" }}>
                      Epoisses
                    </span>
                  </div>
                <div className="d-flex flex-column col-2 card-column justify-content-end align-items-end ms-5">
                  <Link className="subtitle link" to={`/wine/${id}`} >view all</Link>
                </div>
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
