import { useState, useContext } from "react";
import CartContextProvider from "../context/CartContext";

const CartItems = (props) => {
  const { cartItems, increaseItems, decreaseItems, updateItems, removeToCart} =
    useContext(CartContextProvider);

  const { id, productName, price, productImage } = props.data;



  return (
    <div className="product w-[30%] flex items-center rounded-lg shadow-lg px-9 my-8">
      <img
        src={productImage}
        className="w-[50%] object-cover"
        draggable={false}
      />
      <div className="description my-2">
        <p className="text-[1.2rem]">
          <b>{productName}</b>
        </p>
        <p className="font-bold"> ${price}</p>

        <div className="my-3">
          <button
            className="inline-block border px-2"
            onClick={() => increaseItems(id)}
          >
            +
          </button>
          <input
            type="number"
            className="border inline-block w-12 text-center"
            value={cartItems[id]}
            onChange={(e) => updateItems(id, Number(e.target.value))}
          />
          <button
            className="inline-block border px-2"
            onClick={() => decreaseItems(id)}
          >
            -
          </button>

          <button className="bg-red-600 text-white 
          py-1 px-1 rounded-sm my-3
          hover:bg-red-700 hover:transition-all hover:delay-75"
          onClick={()=>removeToCart(id)}
          >
            Remove to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
