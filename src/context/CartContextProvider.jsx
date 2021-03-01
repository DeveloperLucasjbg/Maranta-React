import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  
  const isIdIn = (id) => products.some((prod) => prod.id === id);

  const addCart = (id, cant) => {
    if (isIdIn(id)) {
      let newProducts = products.filter((e) =>
        e.id === id ? { ...e, cant: e.cant + cant } : e
      );
      setProducts(newProducts);
    } else {
      setProducts([
        ...products,
        {
          id: id,
          cant: cant,
        },
      ]);
    }
  };
  return (
    <CartContext.Provider
      value={{
        products,
        addCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
 // setProduct([...[item]])