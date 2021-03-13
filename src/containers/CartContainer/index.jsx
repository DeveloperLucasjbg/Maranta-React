import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";
import CartItem from "../../components/CartItem";
import Button from "@material-ui/core/Button";

const Cart = () => {
  const { cartProducts } = useContext(CartContext);

  return (
    <>
      <div>
        {cartProducts.map((e) => {
          return (
            <CartItem key={e.id} product={e.id} quantity={e.quantity} />
          );
        })}
  <Button>Comprar</Button>
  <Button>vaciar Carrito</Button>

      </div>
    </>
  );
};
export default Cart;
