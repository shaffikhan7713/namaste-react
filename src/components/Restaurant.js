import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const Restaurant = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  resData = useRestaurantMenu(resId);

  if (resData === null) {
    return <h1>Loading Data...</h1>;
  }
  const { name, cuisines } = resData?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const itemCategories =
    resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(itemCategories);
  return (
    <div className="text-center p-2 m-2">
      <div className="font-bold">{name}</div>
      <div className="font-normal">{cuisines.join(", ")}</div>
      {/* <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs. {item.card.info.price / 100}
          </li>
        ))}
      </ul> */}
      <div>
        {itemCategories.map((item, index) => (
          <RestaurantCategory
            key={item.card.card.title}
            data={item.card.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
