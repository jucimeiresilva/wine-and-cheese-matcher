import React, { useEffect, useState } from "react";
import CheeseCard from "./CheeseCard";


const typesCheese = [
  "Camembert",
  "Brie",
  "Roquefort",
  " Cheddar",
  "Cottage",
  "Edam",
  "Gouda",
  "Emmental",
  "Gryère",
  "Gorgonzola",
  "Mussarela",
  "Provolone",
  "Ricota",
  "Meia Cura",
  "Minas Frescal",
  "Prato",
  "coalho",
];

const WineName = () => {
  const [cheese, setCheese] = useState(typesCheese);

  return (
    <div
      className="container-fluid px-5"
      style={{
        backgroundColor: "antiquewhite",
        maxWidth: "1600px",
        width: "90vw",
        minHeight: "100vh",
      }}
    >
      <div
        className="container-fluid px-5"
        style={{ border: "solid black 1px" }}
      >
        <h1>Wine Details</h1>
        <CheeseCard/>
        
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://www.crystalimagesinc.com/wp-content/uploads/wine_cake_heart05-1.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <div>
              <h3>Weinkellerei Am Klostergarten Wollsteiner Rheingrafenstein Spatlese Kerner 2016</h3>
              <div>
                <div className="d-flex align-items-center">
                  <p className="subtitle me-2">Winery</p>
                  <p className="body2">Chalk Hill</p>
                </div>
                <div className="d-flex align-items-center">
                  <p className="subtitle me-2">Type</p>
                  <p className="body2">Red</p>
                </div>
                <div className="d-flex align-items-center">
                  <p className="subtitle me-2">Country</p>
                  <p className="body2">United States</p>
                </div>
                <div className="d-flex align-items-center">
                  <p className="subtitle me-2">Year</p>
                  <p className="body2">2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineName;
