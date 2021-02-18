import { useEffect, useState } from 'react';
import './ItemListContainer.css';

import productos from '../../productos/productos.jsx';
import ItemList from '../../components/ItemList';

function ItemListContainer() {
    const [comprado,setComprado] = useState(0);
    const [contador,setContador] = useState(1);

    const onAdd = () =>{
        setContador(contador+1);
    }
    const onSubstrac = () =>{
        setContador(contador-1);
    }
    const toCart = () =>{
        setComprado(comprado + contador);
        setContador(0);
    }
    const clearCart = () =>{
        setComprado (0);
        setContador(0);
    }
    
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(()=>{
        setIsLoading(true)
        const myPromise = new Promise((resolve, reject) => {
            //set time out para emular coneccion base d datos
            setTimeout(()=>{ resolve(productos)}, 1500);
        });
        myPromise.then((result) => {
            setProducts(result);
            setIsLoading(false);
        });
     },[])                                                                          
    
    if(isLoading){
        return <h2 className='itemListContainer'>Cargando datos...</h2>
    }

    return (
        <>         
            <ItemList products={products}/>     
        </>
    )
}
export default ItemListContainer