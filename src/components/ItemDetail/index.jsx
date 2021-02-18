import './itemDetail.css';
import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount';

const ItemDetail = ({productoDetalle}) => {
    return (        
        <div className="detail">
            <img src={`/img/${productoDetalle.url}`} width='300'/>
            <h2>{productoDetalle.name}</h2>
            <h3>ID:{productoDetalle.id}</h3>
            <h3>{productoDetalle.price}</h3>
            <h3>{productoDetalle.stock}</h3>
            <ItemCount/>
        </div>
    )
}
export default ItemDetail;
