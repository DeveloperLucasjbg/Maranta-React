import { useContext } from "react";
import {CartContext}  from '../../context/CartContextProvider'

const Cart = () => {

    const {product} = useContext(CartContext);
    var name = product.item;
    var cant = product.cant
    return (
        <>
            <h1>CARRITO</h1>
            <h2>{name}</h2>
            <h2>{cant}</h2>

        </>
    )
}
export default Cart
