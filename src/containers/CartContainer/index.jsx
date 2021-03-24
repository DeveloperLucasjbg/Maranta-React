import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContextProvider";
import ResumenCompra from "../../components/ResumenCompra";
import Button from "@material-ui/core/Button";
import "./cart.css";
import { getFirestore } from "../../firebase";
import firebase from "firebase/app";
import FormularioDeUsuario from "../../components/FormularioDeUsuario";
import ComprobanteDePago from "../../components/ComprobanteDePago";

const Cart = () => {
  const { cartProducts, totalPrice, clearCart, totalAmount } = useContext(
    CartContext
  );
  const [buyer, setBuyer] = useState({});
  const [valid, setValid] = useState(false);
  const [comprobante, setComprobante] = useState("");
  const [hideClass, setHideClass] = useState("hide");
  const [linkDePago, setLinkDePago] = useState('');

  const comprar = async () => {
    
    let newOrder = {
      buyer: buyer,
      items: [...cartProducts],
      total: totalPrice,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    };
    console.log(newOrder);
    const db = getFirestore();
    const OrdenesCollection = db.collection("ORDENES");
    OrdenesCollection.add(newOrder).then((value) => {
      setComprobante(value.id);
    });
    fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Authorization:
          "Bearer TEST-2037923620072575-032400-f9e4cdba0ddb2930e51b64743180c734-264186225",
      },
      body: JSON.stringify({
        items: [
          { 
            title : "NO LLEGO A MODIFICAR EL JSON" ,
            description: "PLanta",
            quantity: 2, 
            currency_id: "ARS",
            unit_price: 13.0,
          },
        ],
      }),
    })
      .then((result) => {
        return result.json();
      })
      .then((value) => {
        setLinkDePago(value.init_point);
      });
    setHideClass("");
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
      <ComprobanteDePago comprobante={comprobante} hideClass={hideClass} linkDePago={linkDePago}/>
    </div>
  );
};
export default Cart;
