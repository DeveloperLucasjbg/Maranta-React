import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";

import productos from '../../productos/productos.jsx';


const Cart = () => {
  const { products } = useContext(CartContext);

    console.log(products)

    let productToRender = productos.filter(e => e.id === products.id);

    console.log(productToRender)
  
    
  return (
          <>
              <h1>CARRITO</h1>
          </>
        )   
  }
export default Cart;
