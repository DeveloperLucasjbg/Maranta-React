import "./cartItemContainer.css";
import { DataBaseContext } from "../../context/DataBaseContextProvider";
import { CartContext } from "../../context/CartContextProvider";
import { useContext, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";

const CartItem = ({ product, quantity }) => {
  const { products } = useContext(DataBaseContext);
  const { PriceXproduct, removeItem } = useContext(CartContext);

  const [totalPriceXProduct, setTotalPriceXProduct] = useState(0);
  useEffect(() => {
    setTotalPriceXProduct(PriceXproduct(itemTorender.price, quantity));
    
  }, [product, quantity]);
    
    let itemTorender = products.find((e) => {
      return e.id === product;
    });
  
  return (
    <div className="cartItemContainer">
      <h3> {quantity}</h3>
      <img src={itemTorender.img_path} alt={itemTorender.name} />
      <h3>{itemTorender.name}</h3>
      <h3> {itemTorender.price}</h3>
      <h2> {totalPriceXProduct}</h2>
      <Button onClick={()=>  removeItem(product)}>X</Button>
    </div>
  );
};

export default CartItem;
