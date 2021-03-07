import "./itemInWidget.css";
import { DataBaseContext } from "../../context/DataBaseContextProvider";
import { useContext } from "react";

const ItemInWidget = (cartProducts) => {

  console.log(cartProducts)
  
  return (
    <div className="itemInWidget">
      <h3>cartProducts.im</h3>
      <h3>{cartProducts.name}</h3>
      <h3>precio</h3>
      <h3>cant</h3>
      <h3>X</h3>
    </div>
  )
};
export default ItemInWidget;
