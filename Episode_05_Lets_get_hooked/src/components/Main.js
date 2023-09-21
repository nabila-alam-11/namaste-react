import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Main = () => {
  //***/ const [listOfRestaurants] = useState([]); (Local state variable)

  //**  let listOfRestaurants = [];  (Normal Javascript variable)*/

  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  // console.log(listOfRestaurants);
  return (
    <div className="main">
      <div className="searchBar"></div>
      <h2>Restaurants with online food delivery</h2>
      <div className="filter">
        <button
          className="filter-ratings"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.avgRating >= 4
              )
              setListOfRestaurants(filteredList);
          }}
        >
          Ratings 4.0+
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Main;
