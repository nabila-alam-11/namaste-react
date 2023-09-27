import { useState } from "react";
import Shimmer from "../components/Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
import NoInternet from "./NoInternet";

const Main = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurants, filteredRestaurant, setListOfRestaurants, setFilteredRestaurant ] = useRestaurantList();

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <NoInternet /> ;

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
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-ratings"
          onClick={() => {
            const filteredTopRatedRestaurant = listOfRestaurants.filter(
              (restaurants) => restaurants.info.avgRating > 4
            );
            setListOfRestaurants(filteredTopRatedRestaurant);
            console.log(setListOfRestaurants(filteredTopRatedRestaurant));
          }}
        >
          Ratings 4.0+
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Main;
