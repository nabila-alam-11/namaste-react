import React, { useEffect, useState } from "react";
import { RES_MENU_CDN_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import RestaurantMenuCard from "./RestaurantMenuCard";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  const [ resMenu, setResMenu] = useState([]);
  const [title, setTitle] = useState("");
  const { resId } = useParams();
  useEffect(() => {
    fetchRestaurantInfo();
  }, []);

  const fetchRestaurantInfo = async () => {
    const data = await fetch(RES_MENU_CDN_URL + resId);

    const json = await data.json();
    console.log(json);
    setResInfo(json?.data?.cards[0]?.card?.card?.info);
    setResMenu(json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    setTitle(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.title);
  };
//   console.log(resInfo?.cards[0]?.card?.card?.info)
//    const {name} = resInfo;

  const {
    name,
    costForTwoMessage,
    cuisines,
    avgRating,
    totalRatingsString,
    areaName,
  } = resInfo;

  return (
    <div className="restaurant-menu">
      <div className="resInfo">
        <div className="resInfo-1">
          <h2 className="ri-name">{name}</h2>
          <p className="ri-cuisines">{cuisines}</p>
          <p className="ri-areaName">{areaName}</p>
        </div>
        <div className="resInfo-2">
          <div className="ri-ratings">★{avgRating}</div>
          <p className="ri-total-ratings">{totalRatingsString}</p>
        </div>
      </div>
      <div className="underline"></div>
      <div className="resInfo-3">
        <h4 className="ri-time">◕ 25 MINS</h4>
        <h4 className="ri-price">{costForTwoMessage}</h4>
        <div className="veg-only">🟩VEG ONLY</div>
        <div className="underline"></div>
      </div>

      {/* Menu */}
      <div>
      <h1 className="menu-title">{title}</h1>

      {resMenu.map((items) => 
        <RestaurantMenuCard  key={items?.card?.info?.id} menuData={items}/>
        )}
        </div>
    </div>
  );
};

export default RestaurantMenu;
