import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";

const Cart = () => {
  const { products } = useContext(CartContext);
  console.log(products)
  // var name = products.item;
 
  return (
    <>
      <h1>CARRITO</h1>
      {/* <h2>{name}</h2> */}
      <h2>{products.cant}</h2>
    </>
  );
};
export default Cart;
