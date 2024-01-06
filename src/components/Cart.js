import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cardSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center">
      <h1 className="font-bold my-4 py-4">Cart Items</h1>
      <button
        className="btn p-2 m-2 border bg-black text-white rounded-md"
        onClick={handleClearCart}
      >
        Clear cart
      </button>
      <div className="w-6/12 m-auto">
        {cartItems.length > 0 && <ItemList items={cartItems} />}
        {cartItems.length === 0 && (
          <span className="font-bold">No cart items found</span>
        )}
      </div>
    </div>
  );
};

export default Cart;
