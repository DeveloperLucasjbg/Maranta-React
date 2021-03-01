import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [totalAmount, setTotalAmunt] = useState(0);
  
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
  useEffect(() => {
    setTotalAmunt(products.length)
    
  }, [products])


  return (
    <CartContext.Provider
      value={{
        products,
        addCart,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
 // setProduct([...[item]])