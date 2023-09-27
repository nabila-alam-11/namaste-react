import { useParams } from "react-router-dom";
import RestaurantMenuCard from "./RestaurantMenuCard";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, resMenu, title } = useRestaurantMenu(resId);
  const {
    name,
    costForTwoMessage,
    cuisines,
    avgRating,
    totalRatingsString,
    areaName,
  } = resInfo;

  return resInfo.length === 0 ? (
    <Shimmer />
  ) : (
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

        {resMenu.map((items) => (
          <RestaurantMenuCard key={items?.card?.info?.id} menuData={items} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
