import "./itemInWidget.css";
import { useContext } from "react";
import { DataBaseContext } from "../../context/DataBaseContextProvider";
import { CartContext } from "../../context/CartContextProvider";
import Button from "@material-ui/core/Button";

const ItemInWidget = ({ product }) => {
  const { products } = useContext(DataBaseContext);
  const { removeItem, cartProducts } = useContext(CartContext);
  
  let itemTorender = products.find((e) => {
    return e.id === product;
  });
  
  const quantity = cartProducts.find(e => e.id === product)

  return (
    <div className="itemInWidget">
      <h4>{quantity.quantity}</h4>
      <img
        className="imgInWidget"
        src={itemTorender.img_path}
        alt={itemTorender.name}  
      />
      <h4>{itemTorender.name}</h4>
      <h4>{itemTorender.price}</h4>
      <Button onClick={() => removeItem(product)}>X</Button>
    </div>
  );
};
export default ItemInWidget;
