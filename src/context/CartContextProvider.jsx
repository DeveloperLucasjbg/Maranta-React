import { createContext, useState, useEffect } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [trigger, setTrigger] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [totalAmount, setTotalAmunt] = useState(0);

  const isIdIn = (id) => cartProducts.some((e) => e.id === id);

  const addCart = (id, quantity) => {
    if (isIdIn(id)) {
      let newProducts = cartProducts.map((e) =>
        e.id === id ? { ...e, quantity: e.quantity + quantity } : e
      );
      setCartProducts(newProducts);
    } else {
      setCartProducts([...cartProducts, { id: id, quantity: quantity }]);
    }
  };

  
  // const removeItem = (id) => {
    //   let newProducts = cartProducts.map((e) => e.categoryID !== id);
    //     setCartProducts(newProducts);
    // // }
    
    useEffect(() => {
      setTotalAmunt(cartProducts.length);
    }, [cartProducts.length]);
    
    return (
      <CartContext.Provider
      value={{
        cartProducts,
        addCart,
        totalAmount,
        // removeItem,
        setTrigger, //para cartInWidget
        trigger,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
