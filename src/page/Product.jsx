/* eslint-disable react/prop-types */
import CartContextProvider from "../context/CartContext";
import { useContext } from "react";

const Product = (props) => {
  const { cartItems, addToCart, removeToCart } =
    useContext(CartContextProvider);

  const { id, productName, price, productImage } = props.data;
  const quantity = cartItems[id];

  return (
    <div
      className="product w-2/3 flex flex-col justify-center items-center 
    cursor-pointer"
    >
      <img
        src={productImage}
        className="w-full  hover:scale-105 hover:transition-all hover:delay-75"
        draggable={false}
      />
      <div className="description my-2">
        <p className="text-[1.2rem] text-center">
          <b>{productName}</b>
        </p>
        <p className="font-bold text-center"> ${price}</p>
      </div>

      {
        quantity==0?
        <button className="border border-black rounded-[99px] px-3 py-1
        hover:bg-black hover:text-white hover:transition-all hover:delay-75 my-4"
        onClick={()=>addToCart(id)}>Add to cart</button>:

        <button className="border text-white rounded-[99px] px-3 py-1
        bg-red-500 border-red-500 my-4 hover:bg-red-600 hover:transition-all hover:delay-75"
        onClick={()=>removeToCart(id)}>Remove to cart</button>
      }
    </div>
  );
};

export default Product;
