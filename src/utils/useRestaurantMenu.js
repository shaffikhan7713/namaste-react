import { useState, useEffect } from "react";

const useRestaurantMenu = (restaurantId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchRestaurantMenuata();
  }, []);

  const fetchRestaurantMenuata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=" +
        restaurantId
    );
    const jsonResponse = await data.json();
    setResInfo(jsonResponse.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
