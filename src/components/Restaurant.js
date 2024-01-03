import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Restaurant = () => {
  const { resId } = useParams();
  resData = useRestaurantMenu(resId);

  if (resData === null) {
    return <h1>Loading Data...</h1>;
  }
  const { name, cuisines } = resData?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs. {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurant;
