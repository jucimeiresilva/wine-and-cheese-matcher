import React from "react";


const CardAbout = () => {
  return (
    
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <div className="card">
          <img src="./image/felipe.jpg"  style={{ height: "250px", width: "250px" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Felipe Mantovani </h5>
            <p className="card-text">Quem sou eu</p>
          </div>
        </div>
      </div>

      
      <div className="col">
        <div className="card">
          <img src="./image/ju.jpg" style={{ height: "250px", width: "250px" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Jucimeire Carvalho</h5>
            <p className="card-text"> Quem sou eu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAbout;
