import { createContext } from "react";


export const cartContext = createContext();
console.log(cartContext)



const CartContext = ({children}) => {

    return(
        <cartContext.Provider value={'value'}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContext;