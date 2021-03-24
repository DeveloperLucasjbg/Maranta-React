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

  const quantity = cartProducts.find((e) => e.id === product);

  return (
    <div className="itemInWidget">
      <p>{quantity.quantity}</p>
      <img
        className="imgInWidget"
        src={itemTorender.img_path}
        alt={itemTorender.name}
      />
      <p>{itemTorender.name}</p>
      <p>{itemTorender.price}</p>
      <Button onClick={() => removeItem(product)}>X</Button>
    </div>
  );
};
export default ItemInWidget;
