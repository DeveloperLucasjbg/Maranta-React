import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";
import CartItem from "../../components/CartItem";
import Button from "@material-ui/core/Button";

const Cart = () => {
  const { cartProducts } = useContext(CartContext);
  const { totalPrice } = useContext(CartContext);

  return (
    <>
      <div>
        {cartProducts.map((e) => {
          return <CartItem key={e.id} product={e.id} quantity={e.quantity} />;
        })}
        <h2>Precio Final : {totalPrice}</h2>

        <Button>Comprar</Button>
        <Button>vaciar Carrito</Button>
      </div>
    </>
  );
};
export default Cart;
