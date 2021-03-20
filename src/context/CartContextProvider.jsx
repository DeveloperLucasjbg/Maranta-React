import { createContext, useState, useEffect } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [trigger, setTrigger] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [totalAmount, setTotalAmunt] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [priceXProd, setPriceXProd] = useState(0);

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
    return localStorage.setItem("UserCart", JSON.stringify(cartProducts));
  };
  // const getCart = () =>{ setCartProducts(localStorage.getItem('UserCart'))}
  // rompe todo

  const clearCart = () => {
    setCartProducts([]);
    setTotalPrice(0);
    setPriceXProd(0);
    setTotalAmunt(0);
  };

  const removeItem = (id) => {
    let newProducts = cartProducts.map((e) => e.id !== id);
    return setCartProducts(newProducts);
  };

  const PriceXproduct = (x, y) => {
    setPriceXProd(x * y);
    setTotalPrice(totalPrice + priceXProd);
    return priceXProd;
  };

  useEffect(() => {
    setTotalAmunt(cartProducts.length);
  }, [cartProducts.length]);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addCart,
        totalAmount,
        removeItem,
        setTrigger, //para cartInWidget
        trigger,
        PriceXproduct,
        totalPrice,
        clearCart,
        // getCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
