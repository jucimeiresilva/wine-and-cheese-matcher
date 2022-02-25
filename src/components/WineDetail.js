import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CheeseCard from "./CheeseCard";
import "./WineDetail.css";

const typesCheese = [
  {
    name: "Camembert",
    img: "https://fromage-gourmet.fr/743-home_default/camembert-aux-pommes-et-noix.jpg/614-home_default/camembert-aux-cepes-fromage-en-ligne.jpg",
  },
  {
    name: "Brie",
    img: "https://fromage-gourmet.fr/524-home_default/brie-de-meaux-fromage-en-ligne.jpg",
  },
  {
    name: "Roquefort",
    img: "https://fromage-gourmet.fr/634-home_default/roquefort-papillon-fromage-en-ligne.jpg",
  },
  {
    name: "Epoisses",
    img: "https://fromage-gourmet.fr/219-large_default/epoisses-fromage-en-ligne.jpg",
  },
  {
    name: "Chèvre de l'Isère",
    img: "https://fromage-gourmet.fr/698-home_default/chevre-de-l-isere-fromage-en-ligne.jpg",
  },
  {
    name: "Emmental",
    img: "https://fromage-gourmet.fr/511-large_default/emmental-francais.jpg",
  },
  {
    name: "Comté",
    img: "https://fromage-gourmet.fr/528-large_default/comte-doux-fromage-en-ligne.jpg",
  },
  {
    name: "Parmesan",
    img: "https://fromage-gourmet.fr/663-large_default/parmesan-fromage-en-ligne.jpg",
  },
  {
    name: "Valencay Fermier",
    img: "https://fromage-gourmet.fr/553-large_default/valencay-fermier-aop-fromage-en-ligne.jpg",
  },
  {
    name: "Gorgonzola",
    img: "https://fromage-gourmet.fr/618-large_default/gorgonzola-fromage-en-ligne.jpg",
  },
  {
    name: "Marotte",
    img: "https://fromage-gourmet.fr/685-large_default/marotte-fromage-en-ligne.jpg",
  },
];

const WineDetail = ({ wineList }) => {
  const { id } = useParams();
  const getWine = () => {
    return wineList.items.filter((wine) => wine._id === id);
  };

  const [wine, setWine] = useState(getWine());

  return (
    <div
      className="container-fluid px-5"
      style={{
        maxWidth: "1600px",
        width: "90vw",
        height: "90vh",
      }}
    >
      <div className="container-fluid px-5">
        <h1>Wine Details</h1>
        <div className="container d-flex">
          <div
            className="card"
            style={{
              width: "300px",
              height: "640px",
              background: "rgba(97, 0, 5, 0.1)",
            }}
          >
            <img
              src={
                wine[0].Type === "Red"
                  ? "https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/23531-01.png"
                  : wine[0].Type === "White"
                  ? "https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/23760-01.png"
                  : "https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/26830-01.png"
              }
              className="card-img-top mx-auto"
              alt={`${wine[0].Type} wine bottle`}
              style={{ height: "auto", width: "200px" }}
            />
            <div className="card-body">
              <div>
                <h3>{wine[0].Name}</h3>
                <div>
                  <div className="d-flex align-items-center">
                    <p className="subtitle me-2">Type</p>
                    <p className="body2">{wine[0].Type}</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="subtitle me-2">Country</p>
                    <p className="body2">{wine[0].Country}</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="subtitle me-2">Rating</p>
                    <p className="body2">{wine[0].rating.toFixed(1)}</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="subtitle me-2">Year</p>
                    <p className="body2">{wine[0].vintage}</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="subtitle me-2">Winery</p>
                    <p className="body2">{wine[0].Winery}</p>
                  </div>

                 
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <h3> {typesCheese.length} MATCHING CHEESE</h3>
            <div
              className="card-group"
              style={{ maxHeight: "75vh", overflow: "scroll" }}
            >
              {typesCheese.map((cheese) => {
                return (
                  <div key={cheese.name} className="col-3 mx-1 my-1">
                    <CheeseCard cheeseName={cheese.name} img={cheese.img} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineDetail;
