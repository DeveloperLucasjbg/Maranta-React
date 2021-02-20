import './itemDetail.css';
import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';


const ItemDetail = ({productoDetalle}) => {

    const stock = 10;
    const [itemAmount, setItemAmount] = useState(0);
   
    const [seleccionado, setSeleccionado] = useState(false)
    
// ternario = visibility hidden



    return (        
        <div className="detail">
            <img src={`/img/${productoDetalle.url}`} width='300'/>
            <h2>{productoDetalle.name}</h2>
            <h3>ID:{productoDetalle.id}</h3>
            <h3>{productoDetalle.price}</h3>
            <h3>{productoDetalle.stock}</h3>
            <h4>en Carro :{itemAmount}</h4>

        {/* 
            {(seleccionado === true ? <Link to='/cart' style={{fontSize:'4vh'}}>
                                    Finalizar Compra </Link> 
                                    :                              
                                    <ItemCount setItemAmount={setItemAmount} setSeleccionado={setSeleccionado} stock={stock}/> )} */}


        {(seleccionado === true ? <Link to='/cart' style={{fontSize:'4vh'}} >
                                    Finalizar Compra </Link> 
                                 :
                                 <p to='/cart' className='disabled-link'>Finalizar Compra</p> )}

        {(seleccionado === true ?
        <ItemCount visibility='hidden' setItemAmount={setItemAmount} setSeleccionado={setSeleccionado} stock={stock}/>
                :
        <ItemCount setItemAmount={setItemAmount} setSeleccionado={setSeleccionado} stock={stock}/>)}
        </div>
    )
}
export default ItemDetail;
