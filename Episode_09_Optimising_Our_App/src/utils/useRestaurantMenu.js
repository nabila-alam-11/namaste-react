import { useEffect, useState } from "react";
import { RES_MENU_CDN_URL } from "./constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState([]);
  const [resMenu, setResMenu] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchRestaurantInfo();
  }, []);

  const fetchRestaurantInfo = async () => {
    const data = await fetch(RES_MENU_CDN_URL + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json?.data?.cards[0]?.card?.card?.info);
    setResMenu(
      json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
    setTitle(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
        .card.title
    );
  };
  return { resInfo, resMenu, title };
};
export default useRestaurantMenu;
