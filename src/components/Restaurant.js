import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Restaurant = () => {
  const [resData, setResData] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=" +
        resId
    );

    const jsonData = await data.json();

    setResData(jsonData.data);
  };

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
          <li>
            {item.card.info.name} - Rs. {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurant;
