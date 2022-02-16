import React from "react";
import FavoriteCard from "./FavoriteCard";


const Favorites = () => {
  return (
    <div
      className="container"
      style={{ backgroundColor: "antiquewhite", height: "95vh" }}
    >
      <h1>Favorites</h1>
      <FavoriteCard />
    </div>
  );
};

export default Favorites;
