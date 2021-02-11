import {Grid} from '@material-ui/core/';
import { useEffect, useState } from 'react';
// import ItemCount from '../../components/ItemCount';
import './ItemListContainer.css'

import productList from "../../productos/productList";
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
            setTimeout(()=>{ resolve(productList)}, 1500);
        });
        myPromise.then((result) => {
            setProducts(result);
            setIsLoading(false);
        });
     },[])                                                                          
    
    if(isLoading){
        return <h2>Cargando datos...</h2>
    }

    return (
        <>         
            <ItemList products={products}/>     
        </>
    )
}
export default ItemListContainer