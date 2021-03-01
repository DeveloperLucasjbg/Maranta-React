import "./itemDetail.css";
import React, { useState, useEffect, useContext } from "react";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { CartContext } from "../../context/CartContextProvider";

const ItemDetail = ({ productoDetalle }) => {
  const [itemAmount, setItemAmount] = useState(0);
  const [seleccionado, setSeleccionado] = useState(false);

  const { addCart } = useContext(CartContext);
  useEffect(() => {
    let id = productoDetalle.id;
    let cant = itemAmount;
    addCart(id, cant);
  }, [itemAmount]);
  return (
    <Typography>
      <div className="detail">
        <img
          src={`/img/${productoDetalle.url}`}
          alt={productoDetalle.name}
          width="500"
        />
        <div>
          <h2 className="title">{productoDetalle.name}</h2>
          <h4>ID:{productoDetalle.id}</h4>
          <h4>$ {productoDetalle.price}</h4>
          <h4>En stock: {productoDetalle.stock}</h4>

          <h4> en Carro :{itemAmount}</h4>

          {seleccionado ? (
            <ItemCount
              className="hide"
              setItemAmount={setItemAmount}
              setSeleccionado={setSeleccionado}
              stock={productoDetalle.stock}
            />
          ) : (
            <ItemCount
              setItemAmount={setItemAmount}
              setSeleccionado={setSeleccionado}
              stock={productoDetalle.stock}
            />
          )}
          {seleccionado === true ? (
            <Link to="/cart" style={{ fontSize: "4vh" }}>
              Finalizar Compra
            </Link>
          ) : (
            <p to="/cart" className="hide">
              Finalizar Compra
            </p>
          )}
        </div>
      </div>
    </Typography>
  );
};
export default ItemDetail;
