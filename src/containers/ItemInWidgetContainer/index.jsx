import { useContext } from "react";
import ItemInWidget from "../../components/ItemInWidget";
import ItemInWidgetContenedor from "../../components/ItemInWidgetContenedor";

import "./itemInWidgetContainer.css";
import { CartContext } from "../../context/CartContextProvider";

const ItemInWidgetContainer = () => {
  const { cartProducts, trigger } = useContext(CartContext);

  let triggerClass = "hidden";
  trigger ? (triggerClass = "") : (triggerClass = "hidden");
  return (
    <div className={`itemInWidgetContainer ${triggerClass}`}>
      <h3>Productos en carrito</h3>
      {cartProducts.map((e) => {
        return <ItemInWidget key={e.id} product={e.id} quantity={e.quantity} />;
      })}
      <ItemInWidgetContenedor />
    </div>
  );
};
export default ItemInWidgetContainer;
