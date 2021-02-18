import ItemDetail from "../../components/ItemDetail";
import productos from "../../productos/productos.jsx";
import { useParams } from 'react-router-dom';


import { useEffect, useState } from 'react';

function ItemDetailContainer() {
  
    const {id} = useParams();
    const [productoDetalle, setProductoDetalle] = useState([]);
    
    useEffect(()=>{
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(()=>{ resolve(productos)}, 1100);
        });
        myPromise.then((result) => {
            const toRender = result.find((result) =>{
                return result.name === id;      
            })
            setProductoDetalle(toRender)
        });
     },[])                                                                             
    
    return (
        <>         
        <ItemDetail id={id} productoDetalle={productoDetalle}/>
        </>
    )
}
export default ItemDetailContainer
