import ItemDetail from "../../components/ItemDetail";
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { DataBaseContext } from '../../context/DataBaseContextProvider';

function ItemDetailContainer() {

    const {id} = useParams();
    const { products } = useContext(DataBaseContext);
    const [productoDetalle, setProductoDetalle] = useState([]);

    useEffect(()=>{
            let toRender = products.find((products) =>{
                return products.name === id;      
            })
            setProductoDetalle(toRender)
     },[])                                                                             
    
    return (
        <>         
        <ItemDetail productoDetalle={productoDetalle} />
        </>
    )
}
export default ItemDetailContainer
