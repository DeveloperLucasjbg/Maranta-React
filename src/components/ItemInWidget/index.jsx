import "./itemInWidget.css";
import { useContext, useState, useEffect } from "react";
import { DataBaseContext } from "../../context/DataBaseContextProvider";
import { CartContext } from "../../context/CartContextProvider";
import Button from "@material-ui/core/Button";



const ItemInWidget = ({ product, quantity }) => {
  const { products } = useContext(DataBaseContext);
  const { PriceXproduct, removeItem } = useContext(CartContext);

  let itemTorender = products.find((e) => {
    return e.id === product;
  });

  const [totalPriceXProduct, setTotalPriceXProduct] = useState(0);
  useEffect(() => {
    setTotalPriceXProduct(  PriceXproduct(itemTorender.price, quantity))
  }, [product, quantity]);

  return (
    <div className="itemInWidget">
      <h4>{quantity}</h4>
      <img
        className="imgInWidget"
        src={itemTorender.img_path}
        alt={itemTorender.name}
      />
      <h4>{itemTorender.name}</h4>
      <h4>{itemTorender.price}</h4>
      <h4>{totalPriceXProduct}</h4>
      <Button onClick={()=>  removeItem(product)}>X</Button>
    </div>
  );
};
export default ItemInWidget;
