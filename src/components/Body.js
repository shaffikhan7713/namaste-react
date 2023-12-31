import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import RestoCard, { withPromotedRestoCard } from "./RestoCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [resStateData, setResStateData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const isOnline = useOnlineStatus();
  const { loggedInUser, setUsername } = useContext(UserContext);

  const PromotedRestoCard = withPromotedRestoCard(RestoCard);

  useEffect(() => {
    fetchData();
  }, []);

  /** Example of lifecycle methods in useEffect */
  useEffect(() => {
    // console.log("Inside UseEffect"); //component will mount
    return () => {
      // console.log("Inside Return Function in UseEffect"); //unmounting, clearing intervals, timeouts, garbage
    };
  }, []); //dependency error is componentDidUpdate

  // console.log("Inside Render");

  const fetchData = async () => {
    const responseData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonResponse = await responseData.json();

    setResStateData(
      jsonResponse?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterData(
      jsonResponse?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (!isOnline) {
    return (
      <h1>
        You seems to be offline!!. Please check your internet connection!!.
      </h1>
    );
  }

  console.log("filterData", filterData);
  if (filterData.length <= 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div>
        <input
          type="text"
          name="search-input"
          data-testid="searchInput"
          className="border-2 px-3 ml-3"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          name="search-btn"
          className="px-4 my-5 bg-gray-200 rounded-sm"
          onClick={() => {
            const filterResult = resStateData.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterData(filterResult);
          }}
        >
          Search
        </button>
        <button
          className="px-4 m-5 bg-gray-200 rounded-sm"
          onClick={() => {
            const result = filterData.filter((res) => res.info.avgRating > 4);
            setResStateData(result);
          }}
        >
          Top Rated Restaurants
        </button>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={loggedInUser}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-black"
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterData.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurant/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <PromotedRestoCard resObject={restaurant} />
            ) : (
              <RestoCard resObject={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
