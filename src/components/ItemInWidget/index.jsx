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

  // deveria ir en utils
  let acortadorDeNombre = (nombre) => {
    let xNumer = 11;
    if (nombre.length > xNumer) {
      let acortado = nombre.substring(0, xNumer) + "...";
      return acortado;
    } else {
      return nombre;
    }
  };

  return (
    <div className="itemInWidget">
      <spam>{quantity.quantity}</spam>
      <img
        className="imgInWidget"
        src={itemTorender.img_path}
        alt={itemTorender.name}
      />
      <spam>{acortadorDeNombre(itemTorender.name)}</spam>
      <spam>{itemTorender.price}</spam>
      <Button className='X' onClick={() => removeItem(product)}>X</Button>
    </div>
  );
};
export default ItemInWidget;
