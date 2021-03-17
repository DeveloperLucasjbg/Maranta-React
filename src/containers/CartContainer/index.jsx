import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";
import CartItem from "../../components/CartItem";
import Button from "@material-ui/core/Button";
import "./cart.css";

const Cart = () => {
  const { cartProducts, totalPrice } = useContext(CartContext);
  return (
    <div className="cartContainer">
      <div className="isquierda">
        <h3>Tu Compra</h3>
        {cartProducts.map((e) => {
          return <CartItem key={e.id} product={e.id} quantity={e.quantity} />;
        })}
        <h3>Subtotal ${totalPrice}</h3>
        <h5>Envio : $500 </h5>
        <h4>Costo final con envio : $ {totalPrice + 300}</h4>
        <Button variant="outlined">Comprar</Button>
        <Button variant="outlined">Seguir Comprando</Button>
        <Button variant="outlined">vaciar Carrito</Button>
      </div>
      <div className="derecha">
        <h2>Logueate</h2>
        <h2>Datos de usuario</h2>
        <h2>Datos de usuario</h2>
        <h2>Datos de usuario</h2>
        <p>10% de descuento pagando por transferencia bancaria ó efectivo</p>
        <h2>Formas de pago</h2>

        <Button variant="outlined">Check Out</Button>
      </div>
    </div>
  );
};
export default Cart;
