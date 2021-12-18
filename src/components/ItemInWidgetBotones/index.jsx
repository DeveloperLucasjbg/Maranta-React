import { Link } from "react-router-dom";
import { useContext } from "react";
import Button from "@material-ui/core/Button";
import { CartContext } from "../../context/CartContextProvider";

const ItemInWidgetBotones = () => {
  const { totalPrice, clearCart } = useContext(CartContext);
  return (
    <div className="bottom">
      <div>
        <p>Subtotal: ${totalPrice}</p>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <Button color="primary" variant="contained">
            Ir al check out
          </Button>
        </Link>
        <Button onClick={clearCart} variant="contained" color="secondary">
          Vaciar Carrito
        </Button>
      </div>
    </div>
  );
};

export default ItemInWidgetBotones;
