import React, { useEffect, useState } from "react";
import starOn from "../assets/Property 1=on.png";
import starOff from "../assets/Property 1=off.png";
import "./WineList.css";
import { Link } from "react-router-dom";

const WineCard = ({ Name, Winery, Country, Type, vintage, rating, id }) => {

  const [star, setStar] = useState(false)

  const controlStar = () => {
    if (localStorage.getItem("favorites").indexOf(id) !== -1) {
      setStar(true)
    } else {
      setStar(false)
    }
  }

  const toggleFavorite = (id) => { 
    if (localStorage.key("favorites")){
      if (localStorage.getItem("favorites").indexOf(id) !== -1) {
        const fav = [...JSON.parse(localStorage.getItem("favorites"))];
        fav.splice(fav.indexOf(id), 1)
        localStorage.setItem("favorites",JSON.stringify(fav))
        controlStar()
        return
      };
      const oldFav = [id, ...JSON.parse(localStorage.getItem("favorites"))]
      localStorage.setItem("favorites", JSON.stringify(oldFav));
    } else {
      localStorage.setItem("favorites", JSON.stringify([id]) )
    }
  } 

  useEffect(() => {
    if (!localStorage.key("favorites")){
      localStorage.setItem("favorites", JSON.stringify([]) )
    }
    controlStar()
  }, [localStorage.getItem("favorites")])
  

  return (
    <>
      <div className="card mb-3 col wine-hover">
        <div className="row g-0">
          <div className="col-3">
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
              style={{ width: "auto", height:"180px" }}
            />
          </div>
          <div
            className="col-md d-flex flex-column"
            style={{ padding: "24px 16px 24px 0px" }}
          >
            <div className="card-body ms-2">
              <div className="d-flex align-items-start justify-content-between">
                <h3 className="card-title mb-4"> {Name} </h3>
                <Link to="">
                  <div className="me-5" onClick={() => {toggleFavorite(id);controlStar()}}>
                    <img src={star ? starOn : starOff} alt="Favorited" className="favorite-star" />
                  </div>
                </Link>
              </div>
              <div className="card-details d-flex">
                <div className="d-flex flex-column col me-1 card-column justify-content-between">
                  <div>
                    <span className="subtitle me-1">Winery</span>
                    <span className="body2">{Winery}</span>
                  </div>
                  <div>
                    <span className="subtitle me-1">Type</span>
                    <span className="body2">{Type}</span>
                  </div>
                </div>
                <div className="d-flex flex-column col me-1 card-column justify-content-between">
                  <div>
                    <span className="subtitle me-1">Country</span>
                    <span className="body2">{Country}</span>
                  </div>
                  <div>
                    <span className="subtitle me-1">Year</span>
                    <span className="body2">{vintage}</span>
                  </div>
                </div>
                <div className="d-flex flex-column col card-column ">
                  <span className="me-1 matching">{rating.toFixed(1)} </span>
                  <span className="body2">Rating</span>
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
