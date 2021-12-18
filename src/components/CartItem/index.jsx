import "./cartItemContainer.css";
import { DataBaseContext } from "../../context/DataBaseContextProvider";
import { CartContext } from "../../context/CartContextProvider";
import { useContext } from "react";
import Button from "@material-ui/core/Button";

const CartItem = ({ product, quantity }) => {
  const { products } = useContext(DataBaseContext);
  const { removeItem  } = useContext(CartContext);

  let itemTorender = products.find((e) => {
    return e.id === product;
  });

  const totalXproduct = itemTorender.price * quantity;

  return (
    <div className="cartItemContainer">
      <h3> {quantity}</h3>
      <img src={itemTorender.img_path} alt={itemTorender.name} />
      <h4>{itemTorender.name}</h4>
      <h4> {itemTorender.price}</h4>
      <h3> {totalXproduct}</h3>
      <Button onClick={() => removeItem(product)}>X</Button>
    </div>
  );
};

export default CartItem;
