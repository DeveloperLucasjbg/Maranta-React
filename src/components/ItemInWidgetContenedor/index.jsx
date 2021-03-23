import { Link } from "react-router-dom";
import { useContext } from "react";
import Button from "@material-ui/core/Button";
import { CartContext } from "../../context/CartContextProvider";

const ItemInWidgetContenedor = () => {
  const { totalPrice,clearCart } = useContext(CartContext);
  return (
    <div className='bottom'>
      <div style={{ position: "relative", bottom: -5}}>
        <h5>Precio total: ${totalPrice}</h5>
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
