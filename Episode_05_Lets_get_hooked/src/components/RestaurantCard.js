import {RES_IMG_CDN_URL} from "../utils/constant"
const RestaurantCard = (props) => {
    // console.log(props); //Object
    const { resData } = props; // Destructuring
    const { name, avgRating, cuisines, costForTwo, sla: {deliveryTime}, areaName, cloudinaryImageId} = resData;
    return (
      <div className="restaurant-card">
        <img
          className="res-card-img"
          src={RES_IMG_CDN_URL + cloudinaryImageId}
          alt="KFC"
        />
        <div className="res-name--rating">
          <h4 className="res-name">{name}</h4>
          <h4 className="res-rating">✭ {avgRating}</h4>
        </div>
        <div className="cuisines-location">
          <p className="cuisines">{cuisines.join(", ")}</p>
          <p className="location">{areaName}</p>
        </div>
        <div className="price-deliveryTime">
          <h5 className="price">{costForTwo}</h5>
          <h5 className="delivery-time">{deliveryTime} MINS</h5>
        </div>
      </div>
    );
  };
  export default RestaurantCard;