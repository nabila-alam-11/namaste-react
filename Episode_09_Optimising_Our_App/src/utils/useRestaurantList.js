import { useEffect, useState } from "react";
import { RES_LIST_CDN_URL } from "./constant";

const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchRestaurantList();
  }, []);

  const fetchRestaurantList = async () => {
    const data = await fetch(RES_LIST_CDN_URL);
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return [ listOfRestaurants, filteredRestaurant, setListOfRestaurants, setFilteredRestaurant ];
};

export default useRestaurantList;
