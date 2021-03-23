import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContextProvider";
import ResumenCompra from "../../components/ResumenCompra";
import Button from "@material-ui/core/Button";
import "./cart.css";
import { getFirestore } from "../../firebase";
// import  "@firebase/firestore";
import firebase from "firebase/app";

import FormularioDeUsuario from "../../components/FormularioDeUsuario";
const Cart = () => {
  const { cartProducts, totalPrice, clearCart, totalAmount } = useContext(
    CartContext
  );
  const [buyer, setBuyer] = useState({});
  const [valid, setValid] = useState(false);
  const [comprobante, setComprobante] = useState("");
  const [hideClass, setHideClass] = useState("");

  const comprar = async () => {
    // validar con DB si hay stock && confirmar, retornar Id como orden de compra/seguimiento QR
    let newOrder = {
      buyer: buyer,
      items: [...cartProducts],
      total: totalPrice,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    const db = getFirestore();
    const OrdenesCollection = db.collection("ORDENES");
    OrdenesCollection.add(newOrder).then((value) => {
      setComprobante(value.id);
      setHideClass(true);
    });
  };
  return (
    <div style={{ textAlign: "center", height: "100%", marginTop: "3em" }}>
      <h3>Resumen De Compra</h3>
      <div className="cartContainer">
        <div className="isquierda">
          <FormularioDeUsuario
            setBuyer={setBuyer}
            buyer={buyer}
            setValid={setValid}
          />
        </div>
        <div className="derecha">
          <ResumenCompra
            totalAmount={totalAmount}
            totalPrice={totalPrice}
            cartProducts={cartProducts}
            clearCart={clearCart}
          />
        </div>
      </div>
      {cartProducts.length !== 0 && valid ? (
        <Button
          style={{ textAlign: "center", width: "26%" }}
          variant="outlined"
          color="primary"
          onClick={() => comprar()}
        >
          Comrpar
        </Button>
      ) : (
        <Button
          style={{ textAlign: "center", width: "26%" }}
          variant="contained"
        >
          Comrpar
        </Button>
      )}
    </div>
  );
};
export default Cart;
