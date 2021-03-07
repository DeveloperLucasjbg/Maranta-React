import "./itemDetail.css";
import React, { useState, useEffect, useContext } from "react";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { CartContext } from "../../context/CartContextProvider";

const ItemDetail = ({ productoDetalle }) => {
  const { addCart } = useContext(CartContext);
  const [itemAmount, setItemAmount] = useState(0);
  const [seleccionado, setSeleccionado] = useState(false);
  
  const handlerItemAmount = (i) => {
    return setItemAmount(i);
  };

  // let id = productoDetalle.categoryID;
  // let cant = itemAmount;
  // addCart(id, cant)

  // handlerAddCart(idToGo, cant);


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
          <h4>En stock: {productoDetalle.stock}</h4>
          {seleccionado ? (
            <ItemCount
              className="hide"
              handlerItemAmount={handlerItemAmount}
              setSeleccionado={setSeleccionado}
              stock={productoDetalle.stock}
            />
          ) : (
            <ItemCount
              handlerItemAmount={handlerItemAmount}
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
