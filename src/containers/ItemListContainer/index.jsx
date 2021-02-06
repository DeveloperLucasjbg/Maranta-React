import {Grid} from '@material-ui/core/';
import { useEffect, useState } from 'react';
import ItemCount from '../../components/ItemCount';
import './ItemListContainer.css'

import productList from "../../productos/productList";

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

    // const [products, setProducts] = useState([]);
    
    // useEffect(()=>{
    //     const myPromise = new Promise((resolve, reject) => {
    //         //set time out para emular coneccion base d datos
    //         setTimeout(()=>{ resolve(productList)}, 4500);
    //     });
    //     myPromise.then((result)=>setProducts(result)
    //     );
    // },[])
    


    const array = ["prod1","prod2","prod3","prod4","prod5","prod6"];

    return (
        <div className="fondo">
            <Grid container spacing={2}>
            {array.map((element, index) => {
                return (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3} >
                        <p>{element}</p>
                    <ItemCount stock={11} contador={contador} comprado={comprado} clearCart={clearCart} toCart={toCart} onSubstrac={onSubstrac} onAdd={onAdd}/>              
                       </Grid>
                )
            })}
                
            </Grid>
        </div>
    )
}

export default ItemListContainer
