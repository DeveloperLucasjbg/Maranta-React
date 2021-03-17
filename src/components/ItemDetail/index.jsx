import "./itemDetail.css";
import React, { useState } from "react";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const ItemDetail = ({ productoDetalle }) => {
  const [seleccionado, setSeleccionado] = useState(false);
  return (
    <Typography>
      <div className="detail">
        <img
          src={productoDetalle.img_path}
          alt={productoDetalle.name}
          width="490"
        />
        <div>
          <h2 className="title">{productoDetalle.name}</h2>
          <h4>$ {productoDetalle.price}</h4>
          <p>10% de descuento pagando por transferencia bancaria ó efectivo</p>
          <h4>En stock: {productoDetalle.stock}</h4>
          <div className='bottom'>
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
            <Button variant="outlined" color="primary">
              <Link
                to="/cart"
                style={{ textDecoration: "none" }}
                
              >
                IR AL CARRO
              </Link>
            </Button>
            
          ) : (
            <p to="/cart" className="hide"></p>
          )}
            {seleccionado === true ? (
            <Button color="primary" variant="outlined">
              <Link
                to="/"
                style={{textDecoration: "none" }}
              >
               Seguir Comprando
              </Link>
            </Button>
            
          ) : (
            <p to="/" className="hide"></p>
          )}
        </div>
      </div>
      </div>
    </Typography>
  );
};
export default ItemDetail;
