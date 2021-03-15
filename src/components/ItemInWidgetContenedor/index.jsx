import { Link } from "react-router-dom";
import { useContext } from "react";
import Button from "@material-ui/core/Button";
import "./css.css";
import { CartContext } from "../../context/CartContextProvider";


const ItemInWidgetContenedor = () => {

  const { totalPrice } = useContext(CartContext);

  return (
    <div>
      <h2>Precio Final : {totalPrice}</h2>
      <div>
      <Link to="/cart" style={{textDecoration:'none'}}><Button  variant="contained"> Ir al carro</Button></Link>
      <Link to="/checkOut" style={{textDecoration:'none'}}><Button to="/checkOut" variant="contained" color="Primary">CheckOut</Button></Link>
      </div>
    </div>
  );
};

export default ItemInWidgetContenedor;
