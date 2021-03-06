import { createContext, useState, useEffect, useContext } from "react";
import { DataBaseContext } from "../context/DataBaseContextProvider";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalAmount, setTotalAmunt] = useState(0);

  const isIdIn = (id) => cartProducts.some((prod) => prod.categoryID === id);

  const addCart = (id, cant) => {
    if (isIdIn(id)) {
      let newProducts = cartProducts.map((e) =>
        e.categoryID === id ? { ...e, cant: e.cant + cant } : e
      );
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
  const removeItem = (id) => {
    let newProducts = cartProducts.map((e) => e.categoryID !== id);
      setCartProducts(newProducts);
  }

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
// setProduct([...[item]])
