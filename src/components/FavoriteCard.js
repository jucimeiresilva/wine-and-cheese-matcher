import React from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import "./FavoriteCard.css";

const FavoriteCard = ({ Name, Type, id, check }) => {
  return (
    <div className="wine-hover fav-card">
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
                <h3 className="wine-title">{Name}</h3>
                <FavoriteButton id={id} favorites={"star-fav"} check={check} />
              </div>
              <div className="container d-flex px-1">
                <div className="container d-flex col-12 align-items-center fav-card-details">
                  <div className="d-flex flex-column col-2 card-column realign-match-cheese">
                    <span className="matching"> 11 </span>
                    <span className="subtitle cheese-adjust">
                      Matching Cheese
                    </span>
                  </div>
                  <div className="d-flex flex-column col card-column justify-content-between ">
                    <span className="body2 width120">Camembert</span>
                    <span className="body2 width120">Brie</span>
                  </div>
                  <div className="d-flex flex-column col card-column justify-content-between ">
                    <span className="body2 width120">Roquefort</span>
                    <span className="body2 width120">Epoisses</span>
                  </div>
                  <div className="d-flex flex-column col-2 card-column justify-content-end align-items-end ms-5">
                    <Link className="subtitle link" to={`/wine/${id}`}>
                      view all
                    </Link>
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
