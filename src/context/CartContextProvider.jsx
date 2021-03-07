import { createContext, useState, useEffect } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [trigger, setTrigger] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [totalAmount, setTotalAmunt] = useState(0);

  const isIdIn = (id) => cartProducts.some((prod) => prod.categoryID === id);

  const addCart = (item, quantiy) => {
    if (isIdIn(item.categoryID)) {
      let newProducts = cartProducts.map(e =>
        e.categoryID === item.categoryID
          ? { ...e, quantiy: e.quantiy + quantiy }
          : e
      );
      setCartProducts(newProducts);
    } else {
      setCartProducts([
        ...cartProducts,
        {
          categoryID: item,
          quantiy: quantiy,
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
        setTrigger, //para cartInWidget
        trigger,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
// setProduct([...[item]])
