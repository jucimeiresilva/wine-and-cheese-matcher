import React, { useEffect, useState } from "react";
import SortingButton from "./SortingButton";
import WineCard from "./WineCard";
import "./WineList.css";
import lupa from "../assets/searchIcon.png";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

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
];

const types = ["Red", "White", "Rose"];

const order = ["Ascending", "Descending"];

const WineList = ({ wineList }) => {
  const wines = wineList.items;
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(wineList.items);
  const [whichCountry, setWhichCountry] = useState("");
  const [whichType, setWhichType] = useState("");
  const [whichOrder, setWhichOrder] = useState("");

  const searchWine = (search) => {
    const wineFiltered = wines.filter((wine) =>
      wine.Name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(wineFiltered);
  };

  const organizeCountries = () => {
    const countriesSorted = countriesMock.sort((a, b) => {
      if (a.toLowerCase() > b.toLowerCase()) return 1;
      if (a.toLowerCase() < b.toLowerCase()) return -1;
      return 0;
    });
    return countriesSorted;
  };

  const sortWines = () => {
    const wineSortedByCountry = wines.filter((wine) =>
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

  useEffect(() => {
    setCountries(organizeCountries());
  }, []);

  useEffect(() => {
    sortWines();
  }, [whichCountry, whichType, whichOrder]);

  const checkDummer = () => {
    return;
  };

  organizeCountries();

  return (
    <>
      <div className="container px-5 wine-list-container">
        <div className="container ">
          <h1>Wine List</h1>
          <div className="row mx-3 pe-3 d-flex align-items-center">
            <input
              className="form-control mt-4 col search-bar"
              type="search"
              placeholder={`Search for wine name or year`}
              aria-label="Search"
              value={search}
              onChange={({ target: { value } }) => {
                searchWine(value);
                setSearch(value);
              }}
            />
            <img src={lupa} alt="search badge" className="mb-2 search-badge" />
          </div>
          <div className="ms-1 col ">
            <div className="container d-flex">
              <div className="row-fluid">
                <div className="d-flex flex-column me-3 sorting-group">
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
              <div className="container col wine-card-scroll mt-1">
                {filtered.length ? (
                  filtered.map((wine) => (
                    <div key={wine.id} className="wine-bottle">
                      <Link className="link" to={`/wine/${wine._id}`}>
                        <WineCard {...wine} />
                      </Link>
                      <FavoriteButton id={wine._id} check={checkDummer} />
                    </div>
                  ))
                ) : (
                  <h3>Oops! No wines found</h3>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WineList;
