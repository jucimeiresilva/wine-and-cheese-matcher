import React, { useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard";

const Favorites = ({ wineList }) => {

  const [favorites, setFavorites] = useState([]);
  
  const checkFavorites = () => {
    const item = localStorage.getItem("favorites")
    if (item){
      const wineStoraged = wineList.items.filter((wine) => JSON.parse(localStorage.getItem("favorites")).some((id) => wine.id.includes(id)));
      // JSON.parse(localStorage.getItem("favorites")).filter((id) => wineList.includes(id))
      setFavorites(wineStoraged); 
    }
  }

  useEffect(() => {
    checkFavorites()
  }, []);

  
  return (
    <div
      className="container"
      style={{ height: "90vh" }}
    >
      <h1>Favorites</h1>
      <div style={{ maxHeight: "80vh", overflow: "scroll" }}>
        {favorites.length ?
          favorites.map((favorite) => (
            <FavoriteCard key={favorite.id} {...favorite}  check={checkFavorites} />
          )) : 
          <h3>You don't have saved any wine in your favorites</h3>}
      </div>
    </div>
  );
};

export default Favorites;
