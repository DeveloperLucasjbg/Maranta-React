import { createContext, useState, useEffect, useContext } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  
  const [trigger, setTrigger] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [totalAmount, setTotalAmunt] = useState(0);

  const isIdIn = (id) => cartProducts.some((prod) => prod.categoryID === id);

  const addCart = (id, cant) => {
      if (isIdIn(id)) {
      let newProducts = cartProducts.map(e => e.id === id ? { ...e, cant: e.cant + cant } : e);
      setCartProducts(newProducts);
    } else {
      setCartProducts([
        ...cartProducts,
        {
          categoryID: id,
          cant: cant,
        },
      ]);
    }
  };
  
  // const removeItem = (id) => {
  //   let newProducts = cartProducts.map((e) => e.categoryID !== id);
  //     setCartProducts(newProducts);
  // }

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
        setTrigger,//para cartInWidget
        trigger
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
// setProduct([...[item]])
