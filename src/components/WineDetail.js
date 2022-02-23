import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CheeseCard from "./CheeseCard";

const typesCheese = [
  {name: "Camembert", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFrycST2ih-4Q6M_RVzaccwmiHDuSNIHHQ_Q&usqp=CAU"},
  {name: "Brie", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOpdTNFvmSZFmgccEKf-h6vmYANPu5fMTNxQ&usqp=CAU"},
  {name: "Roquefort", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQYKJZiwbPSRqVxPzc0rX2tNvk2fbwzUc3GQ&usqp=CAU"},
  {name: "Cheddar", img:"https://www.al1f.com/wp-content/uploads/2020/08/cheddar-cheese.jpeg"},
  {name: "Queijo de Cabra", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzCyh_k3QhUUBvK6jJnRkiJkty7CqCyJpL6A&usqp=CAU"},
  {name: "Pecorino", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN77HFF0nrQlOUsWt0DvznV5bV1WqM6nyXvg&usqp=CAU"},
  {name: "Asiago", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1n0D0P2PEjWzUTe_WbT46arvW118TheH8Wg&usqp=CAU"},
  {name: "Parmesão", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmYD_QISe6RzxxkHtg7oir0JG8NWdaeAupNg&usqp=CAU"},
  {name: "Gruyère", img:"https://www.francetvinfo.fr/pictures/agt3QPyl_xwAdvqRdxKoHYuHOPA/752x423/2016/08/23/fotolia_59635939_subscription_monthly_m.jpg"},
  {name: "Gorgonzola", img:"https://www.talensacsaveurs.fr/1689-large_default/gorgonzola-natural-picante.jpg"},
  {name: "Provolone", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJQvHXexhidH5XH088NxFrrBryT_2z_vmTXQ&usqp=CAU"},
]

const WineDetail = ({ wineList }) => {
  const { id } = useParams();
  const getWine = () => {
    return wineList.filter((wine) => wine._id === id);
  };

  const [wine, setWine] = useState(getWine());

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
          <div className="container">
            <h3> {typesCheese.length} MATCHING CHEESE</h3>
            <div className="card-group" style={{maxHeight:"75vh", overflow:"scroll"}}>
            {typesCheese.map((cheese) => {return (
              <div key={cheese.name} className="col-3 mx-1 my-1" >
                <CheeseCard cheeseName={cheese.name} img={cheese.img} />
              </div>
              )})}   
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineDetail;
