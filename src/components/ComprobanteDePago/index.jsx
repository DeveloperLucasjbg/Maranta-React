import { useContext } from "react";
import { UserContext } from "../../context/UserContextProvider";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";

import "./modal.css";

const ComprobanteDePago = ({ comprobante, hideClass, linkDePago }) => {
  const { userName } = useContext(UserContext);
  return (
    <div className={`modal ${hideClass}`}>
      <div className="contenedorModal">
        <h2>Gracias por tu compra {userName} !</h2>
        <h3>Este es tu comprobante: {comprobante}</h3>
        <p>
          <ArrowForwardOutlinedIcon fontSize="small" /> Link De Pago:{" "}
          <a href={linkDePago} rel="noopener noreferrer" target="_blank">
            Mercado Pago
          </a>
        </p>
        <Button>
          <Link style={{ textDecoration: "none" }} to="/">
            Volver al Inicio
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ComprobanteDePago;
