import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem";

const ResumenCompra = ({
  totalAmount,
  cartProducts,
  totalPrice,
  clearCart,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
      }}
    >
      {totalAmount !== 0 ? (
        cartProducts.map((e) => {
          return <CartItem key={e.id} product={e.id} quantity={e.quantity} />;
        })
      ) : (
        <h3>No hay productos en tu carrito </h3>
      )}
      <h3 style={{textAlign:'end', paddingRight:'2em'}}>Costo final : $ {totalPrice}</h3>
    

      <div>
        <Button variant="outlined" onClick={() => clearCart()}>
          vaciar Carrito
        </Button>
        <Button variant="outlined">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Seguir Comprando
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ResumenCompra;
