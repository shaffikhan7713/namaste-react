import { CARD_IMAGE_URL } from "../utils/constants";
const RestoCard = (resObject) => {
  const { name, cuisines, avgRating, cloudinaryImageId } =
    resObject.resObject.info;
  return (
    <div className="p-3 m-3 bg-gray-200 w-48 rounded-sm">
      <img
        className="h-40 rounded-sm"
        alt="card image"
        src={CARD_IMAGE_URL + cloudinaryImageId}
      />
      <h3 className="p-1 font-medium">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export const withPromotedRestoCard = (RestoCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute p-3 m-3 bg-black text-white rounded-lg">
          Promoted
        </label>
        <RestoCard {...props} />
      </div>
    );
  };
};

export default RestoCard;
