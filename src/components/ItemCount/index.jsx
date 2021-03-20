import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

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

  const goCart = (x, y) => {
    setAcumulador(acumulador + contador);
    setContador(0);
    setSeleccionado(true);
    addCart(x, y);
  };

  return (
    <div className="countContainer">
      <ButtonGroup
        color="secondary"
        aria-label="outlined secondary button group"
      >
        {contador > 0 ? (
          <Button
            color="secondary"
            className="span"
            onClick={restar}
            variant="contained"
          >
            -
          </Button>
        ) : (
          <Button className="span">-</Button>
        )}

        <TextField
          color="secondary"
          size="small"
          required="true"
          value={contador}
        />
        {contador < stock ? (
          <Button
            className="span"
            color={"secondary"}
            onClick={sumar}
            variant="contained"
          >
            +
          </Button>
        ) : (
          <Button className="span">+</Button>
        )}
      <Button
        onClick={() => goCart(productoDetalle.id, acumulador)}
        variant="contained"
        color="primary"
        className="agregar"
      >
        Agregar al carro
        <AddShoppingCartIcon style={{ marginLeft: "0.2em" }} />
      </Button>
      </ButtonGroup>
    </div>
  );
};

export default ItemCount;
