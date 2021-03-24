import { useContext } from "react";
import { UserContext } from "../../context/UserContextProvider";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import './modal.css'

const ComprobanteDePago = ({ comprobante, hideClass }) => {
  const { userName } = useContext(UserContext);

  return (
    <div className={`modal ${hideClass}`}>
        <div className='contenedor'>
      <h2>Gracias por tu compra {userName} !</h2>
        <h3>Este es tu comprobante: {comprobante}</h3>
        <Button><Link to='/'>Volver al Inicio</Link></Button>
        </div>
    </div>
  );
};

export default ComprobanteDePago;
