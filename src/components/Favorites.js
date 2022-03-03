import React, { useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard";

const Favorites = ({ wineList }) => {
  const [favorites, setFavorites] = useState([]);

  const checkFavorites = () => {
    const item = localStorage.getItem("favorites");
    if (item) {
      const wineStoraged = wineList.items.filter((wine) =>
        JSON.parse(localStorage.getItem("favorites")).some((id) =>
          wine.id.includes(id)
        )
      );
      setFavorites(wineStoraged);
    }
  };

  useEffect(() => {
    checkFavorites();
  }, []);

  return (
    <div className="container fav-container">
      <h1>Favorites</h1>
      <div className="fav-list">
        {favorites.length ? (
          favorites.map((favorite) => (
            <FavoriteCard
              key={favorite.id}
              {...favorite}
              check={checkFavorites}
            />
          ))
        ) : (
          <div className="mt-4">
            <h3>You don't have saved any wine in your favorites</h3>
            <div className="fav-bg"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
