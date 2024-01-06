import { useDispatch } from "react-redux";
import { CARD_IMAGE_URL } from "../utils/constants";
import { addItem } from "../utils/cardSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="text-left p-2 m-2">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 flex justify-between"
        >
          <div className="w-10/12">
            <p className="font-medium">{item.card.info.name}</p>
            <p>
              Rs.
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </p>
            <span className="text-sm">{item.card.info.description}</span>
          </div>
          <div className="w-2/12">
            <button
              className="absolute bg-black text-white p-1 m-1 rounded"
              onClick={() => handleClick(item)}
            >
              add+
            </button>
            <img
              className="w-40 h-auto"
              src={CARD_IMAGE_URL + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
