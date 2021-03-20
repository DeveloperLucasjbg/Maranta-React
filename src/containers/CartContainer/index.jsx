import { useContext , useState} from "react";
import { CartContext } from "../../context/CartContextProvider";
import CartItem from "../../components/CartItem";
import Button from "@material-ui/core/Button";
import "./cart.css";
import FormularioDeUsuario from "../../components/FormularioDeUsuario";

const Cart = () => {
  const { cartProducts, totalPrice, clearCart,totalAmount } = useContext(CartContext);
  const [buyer, setBuyer] = useState({});

 
    console.log(buyer)
    
   const comprar = () =>{

   }

  return (
    <div className="cartContainer">
      <div className="isquierda">
      <FormularioDeUsuario setBuyer={setBuyer} />
      </div>
      <div className="derecha">
    
        {totalAmount !== 0 ? 
      cartProducts.map((e) => {
          return <CartItem key={e.id} product={e.id} quantity={e.quantity} />;
        })
        :
        <h2>No hay productos en tu carrito </h2>
        }     
        <h3>Subtotal ${totalPrice}</h3>
        <h5>Envio : $300 </h5>
        <h4>Costo final : $ {totalPrice + 300}</h4>
        
        <Button variant="outlined" onClick={() => clearCart()}>vaciar Carrito</Button>
        <Button variant="outlined">Seguir Comprando</Button>
      </div>
      <Button variant="outlined"onClick={() => comprar}>Comrpar</Button>

    </div>
  );
};
export default Cart;
