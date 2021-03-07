import "./cartItemContainer.css";
import { CartContext } from "../../context/CartContextProvider";
import { useContext } from "react";

const CartItem = ({ id }) => {
  const { cartProducts } = useContext(CartContext);
  var product = cartProducts.filter(e => e.categoryID === id)
console.log(product)
  return (
    <div className="cartItemContainer">
      <h3>{product.quantity}</h3>
      <img src={product.img_path} alt={product.name} />
      <h3>{product.name}</h3>
      <h3>$ {product.price}</h3>
      <h3> {product.quantity}</h3> 
    </div>
  );
};

export default CartItem;
