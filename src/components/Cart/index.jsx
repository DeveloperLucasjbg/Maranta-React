import { useContext } from "react";
import { CartContext } from '../../context/CartContextProvider'
import CartItem from "../CartItem"

const Cart = () => {
  const { cartProducts } = useContext(CartContext);

  return (
    <>
    {cartProducts.map(cartProducts => {
        return  <CartItem id={cartProducts.categoryID} product={cartProducts}/>
    })}  
     </>
)   
};
export default Cart;
