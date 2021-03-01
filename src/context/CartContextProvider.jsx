import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  

  const addCart = (item) =>{
    setProduct(item);
    // if (isIdIn(item.item.id) === -1){
    //   setProduct([...[item]])
    // }else{
    //   }  
    // }
  }
  // const isIdIn = (id) => {
  //   return product.findIndex(prod => prod.id === id)
  // }


  return (
    <CartContext.Provider
      value={{
        product,
        addCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
