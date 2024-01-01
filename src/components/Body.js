import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestoCard from "./RestoCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resStateData, setResStateData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const responseData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonResponse = await responseData.json();

    setResStateData(
      jsonResponse.data.cards[1].card.card.gridElements.infoWithStyle
        .restaurants
    );
    setFilterData(
      jsonResponse.data.cards[1].card.card.gridElements.infoWithStyle
        .restaurants
    );
  };

  if (filterData.length <= 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div>
        <input
          type="text"
          name="search-input"
          className="search-input"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          name="search-btn"
          className="search-btn"
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
          className="filter-button"
          onClick={() => {
            const result = filterData.filter((res) => res.info.avgRating > 4);
            setResStateData(result);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="resto-container">
        {filterData.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurant/" + restaurant.info.id}
          >
            <RestoCard resObject={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
