import Button from '@material-ui/core/Button';
import './ItemCount.css';
import React, { useState, useEffect } from 'react';

const ItemCount = () =>{

let stock = 10;

const [comprado, setComprado] = useState(0);
const [contador, setContador] = useState(0)


const sumar = () =>{
    setContador(contador + 1)
}
const restar = () =>{
    setContador(contador - 1)
}
const toCart = () =>{
    setComprado(contador)
    setContador(0)
}
const clearCart = () =>{
    setComprado(0)
    setContador(0)
}


return(
    <div className="countContainer">
        <div className="imagenDmentira">
            <p>{comprado}</p>
        </div>
        <div className="padd">
            {(contador > 0 ? 
            <Button onClick ={restar} className="button" variant="outlined"color="primary">-</Button> 
            : <Button className="button" variant="outlined"color="">-</Button> 
            )}
            <input type="text" value={contador}/>

             {(contador < stock ?             
            <Button onClick ={sumar} className="button" variant="outlined"color="primary">+</Button>
            : <Button  className="button" color="primary">+</Button>
            )}
        </div>  
        <Button onClick={toCart} className="" variant="outlined"color="primary">Agregar al carro</Button>
        <Button onClick={clearCart} className="" variant="outlined"color="secondary">Vaciar carro</Button>
    </div>
    );
}

export default ItemCount;