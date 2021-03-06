import Button from "@material-ui/core/Button";
import "./ItemCount.css";
import React, { useState, useEffect } from "react";

const ItemCount = ({ stock, handlerItemAmount, setSeleccionado }) => {
  const [contador, setContador] = useState(0);
  const [acumulador, setAcumulador] = useState(0);
  const [comprado, setComprado] = useState(0);

  handlerItemAmount(comprado);

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    setContador(contador - 1);
  };
  const acumular = () => {
    setAcumulador(acumulador + contador);
  };
  const toCart = () => {
    acumular();
    setComprado(acumulador);
    setContador(0);
    setSeleccionado(true);
  };
  const clearCart = () => {
    setContador(0);
    setAcumulador(0);
    setComprado(0);
    setSeleccionado(false);
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
      <Button onClick={toCart} className="" variant="outlined" color="primary">
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
