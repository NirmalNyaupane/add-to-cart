import { useContext } from "react";
import CartContextProvider from "../context/CartContext";
import PRODUCTS from "../products";
import CartItems from "../page/CartItems";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const Navigate = useNavigate();
  const { cartItems, calculateTotalAmount } = useContext(CartContextProvider);
  let totalAmt = calculateTotalAmount();
  return (
    <div className="cart-items">
      <h1 className="cart-heading text-3xl font-bold text-center my-8">
        Your cart items
      </h1>

      <div className="flex flex-wrap gap-5 ml-8 items-center">
        {PRODUCTS.map((element) => {
          if (cartItems[element.id] !== 0) {
            return <CartItems key={element.id} data={element} />;
          }
        })}
      </div>
      {totalAmt > 0 ? (
        <div className="text-center">
          <div className="font-bold text-center text-2xl">
            Total amount: {totalAmt}
          </div>
          <button className="bg-black text-white p-2 text-xl rounded-md m-5" 
          onClick={()=>Navigate("/")}>
            Countinue Shopping
          </button>
          <button className="bg-black text-white p-2 text-xl rounded-md">Check Out</button>
        </div>
      ) : (
        <div className="font-bold text-center text-xl">Your cart is empty</div>
      )}
    </div>
  );
};

export default Cart;
