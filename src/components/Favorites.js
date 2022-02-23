import React, { useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard";

const Favorites = ({ wineList }) => {
  const [favorites, setFavorites] = useState([]);

  const getFavorites = () => {
    const favStoraged = JSON.parse(localStorage.getItem("favorites"));
    const wineStoraged = wineList.filter((wine) =>
      favStoraged.some((r) => wine.id.includes(r))
    );
    setFavorites(wineStoraged);
  };
  useEffect(() => {
    getFavorites();
    console.log(favorites);
  }, []);

  return (
    <div
      className="container"
      style={{ backgroundColor: "antiquewhite", height: "95vh" }}
    >
      <h1>Favorites</h1>
      <div style={{ maxHeight: "90vh", overflow: "scroll" }}>
        {favorites.length >= 1 &&
          favorites.map((favorite) => (
            <FavoriteCard   
              key={favorite.id}
              {...favorite}
            />
          ))}
      </div>
    </div>
  );
};

export default Favorites;
