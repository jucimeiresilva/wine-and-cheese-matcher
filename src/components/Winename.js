import React, { useEffect, useState } from "react";
import WineList from "./WineList";


const typesCheese = ['Camembert', 'Brie', 'Roquefort', ' Cheddar', 'Cottage', 'Edam', 'Gouda', 'Emmental','Gryère', 'Gorgonzola', 'Mussarela', 'Provolone', 'Ricota', 'Meia Cura', 'Minas Frescal', 'Prato', 'coalho']

const img = []


const WineName = () => {

    const [cheese, setCheese] = useState(types);
    

    const searchCheese = (search) => {
        const cheeseFiltered = cheese.filter((cheese) =>
          cheese.Name.toLowerCase().includes(search.toLowerCase()));
        setFiltered(cheeseFiltered) 
      }
}

return (
    
      <div
        className="container-fluid px-5"
        style={{ backgroundColor: "antiquewhite", maxWidth: "1600px", width:"90vw", minHeight:"100vh" }}
      >
        <div className="container-fluid px-5" style={{border:"solid black 1px"}}>
        <h1>Wine List > Wine Name</h1>
          <div className="row ms-1 me-2">
            <input
              className="form-control mt-4"
              type="search"
              placeholder="Search for wine name or year"
              aria-label="Search"
              style={{ margin: "0px 0px 60px 0px"}}
              value={search}
              onChange={({ target: { value } }) => {
                searchWine(value); setSearch(value);
              }}
            />  
        </div>
      </div>








export default WineName;

