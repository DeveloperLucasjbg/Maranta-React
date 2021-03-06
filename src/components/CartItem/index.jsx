import "./cartItemContainer.css";
import { CartContext } from '../../context/CartContextProvider'
import { useContext } from "react";



const CartItem = ({ product }) => {
  // const { removeItem } = useContext(CartContext);

  return (
    <div className="cartItemContainer">
      <h3>{product.cant}</h3>
      <img src={product.img_path} alt={product.name} />
      <h3>{product.name}</h3>
      <h3>$ {product.price}</h3>
      {/* <button onClick={removeItem(product.id)}>X</button> */}
    </div>
  );
};

export default CartItem;
