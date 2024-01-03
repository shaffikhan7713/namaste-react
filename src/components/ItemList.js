import { CARD_IMAGE_URL } from "../utils/constants";

const ItemList = ({ items }) => {
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
            <img
              className="w-20 h-auto"
              src={CARD_IMAGE_URL + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
