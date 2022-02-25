import React, {useEffect, useState} from 'react'
import starOn from "../assets/starOn.png";
import starOff from "../assets/starOff.png";

const FavoriteButton = ({id, favorites, check}) => {
  const [star, setStar] = useState(false);

  const controlStar = () => {
    if (localStorage.getItem("favorites").indexOf(id) !== -1) {
      setStar(true);
    } else {
      setStar(false);
    }
  };

  const toggleFavorite = (id) => {
    if (localStorage.key("favorites")) {
      if (localStorage.getItem("favorites").indexOf(id) !== -1) {
        const fav = [...JSON.parse(localStorage.getItem("favorites"))];
        fav.splice(fav.indexOf(id), 1);
        localStorage.setItem("favorites", JSON.stringify(fav));
        controlStar();
        return;
      }
      const oldFav = [id, ...JSON.parse(localStorage.getItem("favorites"))];
      localStorage.setItem("favorites", JSON.stringify(oldFav));
    } else {
      localStorage.setItem("favorites", JSON.stringify([id]));
    }
  };

  useEffect(() => {
    if (!localStorage.key("favorites")) {
      localStorage.setItem("favorites", JSON.stringify([]));
    }
    controlStar();
  }, [localStorage.getItem("favorites")]);

  return (
    <div
    className="me-5 star-div"
    onClick={() => {
      toggleFavorite(id);
      controlStar();
      check()
    }}
  >
    <img
      src={star ? starOn : starOff}
      alt={star ? "Favorited" : "Unfavorited"}
      className={`favorite-star ${favorites} `}
      id="#fav-star"
    />
  </div>
  )
}

export default FavoriteButton