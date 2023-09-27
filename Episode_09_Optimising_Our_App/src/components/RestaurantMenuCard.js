import { RES_FOOD_IMG_URL } from "../utils/constant";
const RestaurantMenuCard = ( props ) => {
    const { menuData} = props;
    const { name, imageId, defaultPrice, price, finalPrice} = menuData?.card?.info;
    return (

        <div className="menu-items">
        <div className="m-item">
        <div className="m-item-1">
        <div className="veg-non-veg">🟩 </div>
        <h5 className="item-name">{name}</h5>
        {<p className='item-price'>₹{ finalPrice/100 || defaultPrice / 100 || price / 100 }</p>}
    </div>
    <div className="m-item-2">
    <img style={{width: "100px"}} src={RES_FOOD_IMG_URL + imageId} alt="" />
    </div>
    </div>
    </div>
        )
}
export default RestaurantMenuCard;