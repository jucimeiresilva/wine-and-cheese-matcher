import React, { useEffect, useState } from "react";
import SortingButton from "./SortingButton";
import WineCard from "./WineCard";
import "./WineList.css";
import lupa from "../assets/search_icon.png";

const countriesMock = [
  "United States",
  "Canada",
  "France",
  "Italy",
  "USA",
  "South Africa",
  "Argentina",
  "Chile",
  "Australia",
  "Spain",
  "Austria",
  "Portugal",
  "Germany",
  "Turkey",
  "Hungary",
  "Croatia",
  "New Zealand",
  "Greece",
  "Lebanon",
  "Netherlands",
  "United Kingdom",
  "Poland",
  "Israel",
  "Romania",
  "Slovenia",
  "Moldova",
  "Switzerland",
  "China",
  "Luxembourg",
  "Mexico",
  "Georgia",
  "Ukraine",
  "Serbia",
];

const types = ["Red", "White", "Rose"];

const order = ["Ascending", "Descending"];

const WineList = ({wineList}) => {
  // esses states ainda vão ser alterados depois, no momento só pra testar se o card e o search funcionam
  const [wines, setWines] = useState(wineList);
  const [countries, setCountries] = useState(countriesMock);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(wines);
  const [whichCountry, setWhichCountry] = useState("");
  const [whichType, setWhichType] = useState("");
  const [whichOrder, setWhichOrder] = useState("");

  const searchWine = (search) => {
    const wineFiltered = wines.items.filter((wine) =>
      wine.Name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(wineFiltered);
  };

  const sortWines = () => {
    const wineSortedByCountry = wines.items.filter((wine) =>
      wine.Country.includes(whichCountry)
    );
    const wineSortedByType = wineSortedByCountry.filter((wine) =>
      wine.Type.includes(whichType)
    );
    const wineCopy = [...wineSortedByType];
    if (whichOrder === "Ascending") {
      wineCopy.sort((a, b) => a.rating - b.rating);
    }
    if (whichOrder === "Descending") {
      wineCopy.sort((a, b) => b.rating - a.rating);
    }
    setFiltered(wineCopy);
  };

  useEffect(() => {sortWines()}, [whichCountry, whichType, whichOrder]);

  console.log(filtered[0])

  return (
    <>
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
          <h1>Wine List</h1>
          <div className="row ms-1 me-2 d-flex align-items-center ">
            <input
              className="form-control mt-4 col"
              type="search"
              placeholder={`Search for wine name or year`}
              aria-label="Search"
              style={{ margin: "0px 0px 60px 0px" }}
              value={search}
              onChange={({ target: { value } }) => {
                searchWine(value);
                setSearch(value);
              }}
            />
            <img
              src={lupa}
              alt="search badge"
              style={{
                maxWidth: "50px",
                height: "100%",
                margin: "-2.0rem -0px 0px -4.3rem",
                position: "relative",
              }}
              className="mb-2"
            />
          </div>
          <div className="ms-1 col ">
            <div className="container d-flex">
            <div className="row-fluid">
              <div className="d-flex flex-column me-3" style={{minWidth:"175px"}} >
                <h3>Sort By:</h3>
                <SortingButton
                  list={order}
                  onFilter={setWhichOrder}
                  filter={setFiltered}
                  wines={wines}
                >
                  Rating
                </SortingButton>
                <SortingButton
                  list={types}
                  onFilter={setWhichType}
                  filter={setFiltered}
                  wines={wines}
                >
                  Types
                </SortingButton>
                <SortingButton
                  list={countries}
                  onFilter={setWhichCountry}
                  filter={setFiltered}
                  wines={wines}
                >
                  Country
                </SortingButton>
              </div>

            </div>
              <div
                className="container col wine-card-scroll mt-1"
                style={{ maxHeight: "80vh", overflow: "scroll" }}
              >
                {filtered.map((wine) => (
                  <WineCard key={wine.id} {...wine} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WineList;
