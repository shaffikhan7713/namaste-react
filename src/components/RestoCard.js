import { CARD_IMAGE_URL } from "../utils/constants";
const RestoCard = (resObject) => {
  const { name, cuisines, avgRating, cloudinaryImageId } =
    resObject.resObject.info;
  return (
    <div className="resto-card">
      <img
        className="card-img"
        alt="card image"
        src={CARD_IMAGE_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestoCard;
