import './itemDetail.css';
import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const ItemDetail = ({productoDetalle}) => {

    const stock = productoDetalle.stock;
    const [itemAmount, setItemAmount] = useState(0); 
    const [seleccionado, setSeleccionado] = useState(false)

    return (        
        <Typography >
        <div className="detail">
            <img src={`/img/${productoDetalle.url}`} width='500'/>
            <div>
                <h2 className='title'>{productoDetalle.name}</h2>
                <h4>ID:{productoDetalle.id}</h4>
                <h4>$ {productoDetalle.price}</h4>
                <h4>En stock: {productoDetalle.stock}</h4>

                {/* <h4> en Carro :{itemAmount}</h4> */}

            {(seleccionado === true ?
            <ItemCount className='hide' setItemAmount={setItemAmount} setSeleccionado={setSeleccionado} stock={stock}/>
            :
            <ItemCount setItemAmount={setItemAmount} setSeleccionado={setSeleccionado} stock={stock}/>)}
            {(seleccionado === true ? <Link to='/cart' style={{fontSize:'4vh'}} >Finalizar Compra</Link> 
                                    :
                                    <p to='/cart' className='hide'>Finalizar Compra</p>)}
            </div>
        </div>
        </Typography>
    )
}
export default ItemDetail;
