import "./itemDetail.css";
import React, { useState, useEffect, useContext } from "react";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const ItemDetail = ({ productoDetalle }) => {
  const [seleccionado, setSeleccionado] = useState(false);
  return (
    <Typography >
      <div className="detail">
        <img
          src={productoDetalle.img_path}
          alt={productoDetalle.name}
          width="490"
        />
        <div>
          <h2 className="title">{productoDetalle.name}</h2>
          <h4>$ {productoDetalle.price}</h4>
          <h4>En stock: {productoDetalle.stock}</h4>
          {seleccionado ? (
            <ItemCount
              className="hide"
              productoDetalle={productoDetalle}
              setSeleccionado={setSeleccionado}
              stock={productoDetalle.stock}
            />
          ) : (
            <ItemCount
              productoDetalle={productoDetalle}
              setSeleccionado={setSeleccionado}
              stock={productoDetalle.stock}
            />
          )}
          {seleccionado === true ? (
            <Link to="/cart" style={{ fontSize: "4vh" }}>
              Finalizar Compra
            </Link>
          ) : (
            <p to="/cart" className="hide"></p>
          )}
        </div>
      </div>
    </Typography>
  );
};
export default ItemDetail;
