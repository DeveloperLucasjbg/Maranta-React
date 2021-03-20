import { useContext, useEffect, useState } from "react";
import ItemInWidget from "../../components/ItemInWidget";
import ItemInWidgetContenedor from "../../components/ItemInWidgetContenedor";

import "./itemInWidgetContainer.css";
import { CartContext } from "../../context/CartContextProvider";

const ItemInWidgetContainer = () => {
  const { cartProducts, trigger, setTrigger } = useContext(CartContext);
  const [triggerClass, setTriggerClass] = useState("hidden");
 

  const mapClick = (e) => {
    let obj = e.target.className;
   if(obj !== "bottom"){
     setTriggerClass("hidden")
     setTrigger(false)}
  };

  useEffect(() => {
    window.addEventListener("click", mapClick);
    window.addEventListener("scroll", mapClick);
    return () => {
      window.removeEventListener("click", mapClick, false);
      window.removeEventListener("scroll", mapClick, false);
      trigger ? setTriggerClass("")  : setTriggerClass("hidden")
    };
  }, [trigger]);



  return (

    <div className={`itemInWidgetContainer ${triggerClass}`}>
      <h3>Productos en carrito</h3>

      {
      cartProducts.map((e) => {
        return <ItemInWidget key={e.id} product={e.id} />;
      })
      }
      <ItemInWidgetContenedor />
    </div>
  );
};
export default ItemInWidgetContainer;
