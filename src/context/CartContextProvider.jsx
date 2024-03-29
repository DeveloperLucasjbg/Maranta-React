import { createContext, useState, useEffect } from "react";
import { DataBaseContext } from "./DataBaseContextProvider";
import { useContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const { products } = useContext(DataBaseContext);

  const [trigger, setTrigger] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [totalAmount, setTotalAmunt] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

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
  const sumarDeAUno = (id) => {
    addCart(id, 1);
  };

  // ******* NOSE COMO RECUPERAR EL STORAGE DEL CARRITO SIN QUE ROMPA TODO  *******        #
  // console.log(JSON.parse(localStorage.getItem('UserCart')))
  // const getCart = () =>{ setCartProducts(JSON.parse(localStorage.getItem('UserCart')))}
  //## #### ### ### ### ### ### ## ## ### #### ### # #### # ## ## ### #### ## ## #### ### ##
  const clearCart = () => {
    setCartProducts([]);
    setTotalPrice(0);
    setTotalAmunt(0);
  };
  const removeItem = (id) => {
    let newProducts = cartProducts.filter((e) => e.id !== id);
    setCartProducts(newProducts);
  };
  useEffect(() => {
    setTotalAmunt(cartProducts.length);
    cartProducts.forEach((e) => {
      let thisPrice = products.find((product) => product.id === e.id);
      let quantity = e.quantity;
      let newPrice = quantity * thisPrice.price;
      return setTotalPrice(totalPrice + newPrice);
    });
  }, [cartProducts.length]);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addCart,
        sumarDeAUno,
        totalAmount,
        removeItem,
        setTrigger, //para cartInWidget
        trigger,
        totalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
