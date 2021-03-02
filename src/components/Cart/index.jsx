// import { useContext } from "react";
// import { CartContext } from "../../context/CartContextProvider";

import CartItem from "../CartItem"

import productos from "../../productos/productos.jsx";

const Cart = () => {
  // const { products } = useContext(CartContext);

  // ### ALerta HARDCODEO  para hacer la plantilla del carro
   let products = [
    {id: 1, name:"Calathea", price:4523, url:'Calathea.jpeg',cant:4},
    {id: 3, name:"Potus", price:5115, url:'Potus Xl.jpeg',cant:3},
    {id: 5, name:"Calathaea", price:555, url:'Calathea.jpeg',cant:1},
    {id: 7, name:"Paotus", price:5115, url:'Potus Xl.jpeg',cant:6},
    {id: 8, name:"Siangonio", price:5555, url:'Singonio Rosado.jpeg',cant:8}
   
];

  let productsToRender = productos.filter((e) => e.id === products.id);


  return (
    <>
    {products.map((productsToRender) => {
        return  <CartItem key={productsToRender.id} product={productsToRender}/>
    })}  
     </>
)   
};
export default Cart;
