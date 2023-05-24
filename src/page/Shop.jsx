import PRODUCTS from "../products.js";
import Product from "./Product.jsx";
const Shop = () => {
  return (
    <>
      <h1 className="font-bold text-center text-[2rem] my-10">Nirmal Shop</h1>
      <div
        className="contianer m-auto grid grid-cols-3 w-[95%] 
    max-w-[1300px] gap-6 place-items-center h-auto"
      >
        {PRODUCTS.map((element) => {
          return <Product key={element.id} data={element} />;
        })}
      </div>
    </>
  );
};

export default Shop;
