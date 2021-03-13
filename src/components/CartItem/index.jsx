import "./cartItemContainer.css";
import { DataBaseContext } from "../../context/DataBaseContextProvider";
import { useContext } from "react";
import Button from "@material-ui/core/Button";


const CartItem = ({ product, quantity }) => {
  const { products } = useContext(DataBaseContext);
  let itemTorender = products.find((e) => {
    return e.id === product;
  });
  return (
    <div className="cartItemContainer">
      <h3> {quantity}</h3>
      <h3>{itemTorender.name}</h3>
      <h3> {itemTorender.price}</h3>
      <img src={itemTorender.img_path} alt={itemTorender.name}/>
      <Button>X</Button>
    </div>
  );
};

export default CartItem;
