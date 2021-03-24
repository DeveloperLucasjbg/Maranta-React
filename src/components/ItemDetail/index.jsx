import "./itemDetail.css";
import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const ItemDetail = ({ productoDetalle }) => {
  const [seleccionado, setSeleccionado] = useState(false);
  const [hideItems, setHideItems] = useState("hiddenItems");

  useEffect(() => {
    seleccionado ? setHideItems("") : setHideItems("hiddenItems");
  }, [seleccionado]);

  return (
    <Typography>
      <div className="detail">
        <img
          className="detailImg"
          src={productoDetalle.img_path}
          alt={productoDetalle.name}
          width="490"
        />
        <div>
          <h2 className="title">{productoDetalle.name}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            eligendi eum debitis, aliquam error, vo, aliquam error, vo, aliquam
            error, vo, aliquam error, vo, aliquam error, voluptas consectetur
            quam temporibus sint repellat in pariatur esse quidem vel similique
            optio illum hic excepturi?, aliquam error, voluptas consectetur quam
            temporibus sint repellat in pariatur esse quidem vel similique optio
            illum hic excepturi?
          </p>
          <h4>Precio: ${productoDetalle.price}</h4>
          <p>10% de descuento pagando por transferencia bancaria ó efectivo</p>
          <h4>En stock: {productoDetalle.stock}</h4>
          <div className="bottom">
            <ItemCount
              productoDetalle={productoDetalle}
              setSeleccionado={setSeleccionado}
              stock={productoDetalle.stock}
            />
            <div className={hideItems}>
              <Button variant="outlined" color="primary">
                <Link to="/cart" style={{ textDecoration: "none" }}>
                  IR AL CHECK OUT
                </Link>
              </Button>
              <Button color="primary" variant="outlined">
                <Link to="/" style={{ textDecoration: "none" }}>
                  Seguir Comprando
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Typography>
  );
};
export default ItemDetail;
