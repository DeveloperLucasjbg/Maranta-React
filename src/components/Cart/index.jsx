import { useContext } from "react";
import {cartContext}  from '../../context/CartContext'

const Cart = () => {

    const CartContextUse = useContext(cartContext);
    console.log(CartContextUse)

    return (
        <>
            <h1>CARRITO</h1>
        </>
    )
}
export default Cart
