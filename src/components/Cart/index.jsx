import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";

import productos from '../../productos/productos.jsx';


const Cart = () => {
  const { products } = useContext(CartContext);

    console.log(products)

    let productsToRender = productos.filter(e => e.id === products.id);

    console.log(productsToRender)
  
    
  return (
          <>
              <h1>CARRITO</h1>
          </>
        )   
  }
export default Cart;
