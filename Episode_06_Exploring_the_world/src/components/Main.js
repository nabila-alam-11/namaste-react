import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "../components/Shimmer";
import { RES_LIST_CDN_URL } from "../utils/constant";

const Main = () => {
  console.log("Body rendered");
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  // Whenever state variables update, react triggers the reconciliation cycle(re-renders the component)
  useEffect(() => {
    fetchRestaurantList();
  }, []);

  fetchRestaurantList = async () => {
    const data = await fetch(RES_LIST_CDN_URL);
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // Conditional Rendering
  if (listOfRestaurants?.length === 0) {
    return <Shimmer />;
  }
  if (filteredRestaurant?.length === 0) {
    return (
      <h4 style={{ textAlign: "center" }}>No match found for {searchText}</h4>
    );
  }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main">
      <h2>Restaurants with online food delivery</h2>
      <div className="searchBar">
        <input
          type="text"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <button
          onClick={() => {
            console.log(searchText);
            const filteredRestaurant = listOfRestaurants.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            console.log(filteredRestaurant);
            setFilteredRestaurant(filteredRestaurant)
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-ratings"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.avgRating >= 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Ratings 4.0+
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Main;
