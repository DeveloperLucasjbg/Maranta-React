import { Link } from "react-router-dom";
import { useContext } from "react";
import Button from "@material-ui/core/Button";
import { CartContext } from "../../context/CartContextProvider";

const ItemInWidgetContenedor = () => {
  const { totalPrice,clearCart } = useContext(CartContext);
  let toggleClass = "bottom";
  totalPrice !== 0 ? (toggleClass = "top") : (toggleClass = "bottom");
  return (
    <div className={toggleClass}>
      <div style={{ position: "relative", bottom: -2 }}>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <Button color="primary" variant="contained"> Ir al check out</Button>
        </Link>
          <Button onClick={clearCart} variant="contained" color="secondary">
            Vaciar Carrito
          </Button>
      </div>
    </div>
  );
};

export default ItemInWidgetContenedor;
