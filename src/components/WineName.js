import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CheeseCard from "./CheeseCard";


const typesCheese = [
  "Camembert",
  "Brie",
  "Roquefort",
  "Cheddar",
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

const WineName = ({wineList}) => {
  

  const { id } = useParams()
  const getWine = () => {
    return wineList.filter((wine) => wine._id === id) 
  }
  
  const [cheese, setCheese] = useState(typesCheese);
  const [wine, setWine] = useState(getWine())

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
          <div className="container d-flex">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://www.crystalimagesinc.com/wp-content/uploads/wine_cake_heart05-1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div>
                  <h3>{wine[0].Name}</h3>
                  <div>
                    <div className="d-flex align-items-center">
                      <p className="subtitle me-2">Winery</p>
                      <p className="body2">{wine[0].Winery}</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="subtitle me-2">Type</p>
                      <p className="body2">{wine[0].Type}</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="subtitle me-2">Country</p>
                      <p className="body2">{wine[0].Country}</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="subtitle me-2">Year</p>
                      <p className="body2">{wine[0].vintage}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
            <h3> 10 MATCHING CHEESE</h3>
            <div className="card-group">
            <CheeseCard cheeseName='Parmesão'/>
            </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default WineName;
