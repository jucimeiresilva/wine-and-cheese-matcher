import React, { useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard";

const Favorites = ({ wineList }) => {

  const [favorites, setFavorites] = useState([]);
  
  let favStoraged = []
  
  const getFavorites = () => {
    favStoraged = JSON.parse(localStorage.getItem("favorites")); 
  };

  const removeFavorite = (id) => { 
    console.log(id)
    const fav = [...JSON.parse(localStorage.getItem("favorites"))];
    fav.splice(fav.indexOf(id), 1)
    localStorage.setItem("favorites",JSON.stringify(fav))
    favStoraged = JSON.parse(localStorage.getItem("favorites"));
  }

  useEffect(() => {
    getFavorites();
  }, []);

  useEffect(() => {
    if (favStoraged.length >= 1){
      const wineStoraged = wineList.filter((wine) => favStoraged.some((id) => wine.id.includes(id)));
      setFavorites(wineStoraged); 
    }
  }, [favStoraged]);
  
  return (
    <div
      className="container"
      style={{ backgroundColor: "antiquewhite", height: "95vh" }}
    >
      <h1>Favorites</h1>
      <div style={{ maxHeight: "90vh", overflow: "scroll" }}>
        {favorites.length >= 1 &&
          favorites.map((favorite) => (
            <FavoriteCard key={favorite.id} {...favorite} remove={removeFavorite}   />
          ))}
      </div>
    </div>
  );
};

export default Favorites;
