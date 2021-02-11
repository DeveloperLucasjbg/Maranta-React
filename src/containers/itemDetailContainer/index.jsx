import ItemDetail from "../../components/ItemDetail";
import productList from "../../productos/productList";

import { useEffect, useState } from 'react';

function ItemDetailContainer() {
  
   
    const [detail, setDetail] = useState([]);
    
    useEffect(()=>{
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(()=>{ resolve(productList[0])}, 2100);
        });
        myPromise.then((result) => {
            setDetail(result);
        });
     },[])                                                                          
    
    return (
        <>         
        <ItemDetail detail={detail} />
        </>
    )
}
export default ItemDetailContainer
