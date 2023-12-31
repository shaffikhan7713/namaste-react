import { useState } from "react";
import RestoCard from "./RestoCard";
import resData from "../utils/mockData";

const Body = () => {
  const [resStateData, setResStateData] = useState(resData);

  return (
    <div className="body">
      <div>
        <button
          className="filter-button"
          onClick={() => {
            const result = resStateData.filter((res) => res.info.avgRating > 4);
            setResStateData(result);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="resto-container">
        {resStateData.map((restaurant) => (
          <RestoCard key={restaurant.info.id} resObject={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
