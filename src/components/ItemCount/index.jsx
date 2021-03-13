import Button from "@material-ui/core/Button";
import "./ItemCount.css";
import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";

const ItemCount = ({ stock, setSeleccionado, productoDetalle }) => {
  const [contador, setContador] = useState(0);
  const [acumulador, setAcumulador] = useState(0);
  const { addCart } = useContext(CartContext);
  
  
  
  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    setContador(contador - 1);
  };

  const clearCart = () => {
    setSeleccionado(false);
    setContador(0);
    setAcumulador(0);
  };
  const goCart = (x,y) => {   
    setAcumulador(acumulador + contador);
    setContador(0);
    setSeleccionado(true);
    addCart(x , y );
  }; 

  return (
    <div className="countContainer">
      {contador > 0 ? (
        <Button
        onClick={restar}
          className="button"
          variant="outlined"
          color="primary"
        >
          -
        </Button>
      ) : (
        <Button className="button" variant="outlined" color="">
          -
        </Button>
      )}

      <input type="text" value={contador} />

      {contador < stock ? (
        <Button
          onClick={sumar}
          className="button"
          variant="outlined"
          color="primary"
        >
          +
        </Button>
      ) : (
        <Button className="button" color="primary">
          +
        </Button>
      )}
      <Button onClick={() => goCart(productoDetalle.id, acumulador)} variant="outlined" color="primary">
        Agregar al carro
      </Button>
      <Button
        onClick={clearCart}
        className=""
        variant="outlined"
        color="secondary"
      >
        Vaciar carro
      </Button>
    </div>
  );
};

export default ItemCount;
