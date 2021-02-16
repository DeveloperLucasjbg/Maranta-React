import { useParams } from 'react-router-dom';
import './itemDetail.css';
import React, { useState, useEffect } from 'react';
import listOfImages from '../images'

const ItemDetail = ({detail}) => {
const [url , setUrl] = useState('');
    const {id} = useParams();

    useEffect(() => {
       let imagen = listOfImages.filter((element) =>{   
           return element.name === id;
        });
        setUrl(imagen[0].route);  
        
    }, [id])

    return (        
        <div className="detail">
            <h3>{id}</h3> 
            <img src={url} width='200'/>
            <h2>{detail.name}</h2>
            <h3>ID:{detail.id}</h3>
            <h3>{detail.price}</h3>
            <h3>{detail.stock}</h3>
        </div>
    )
}
export default ItemDetail;
