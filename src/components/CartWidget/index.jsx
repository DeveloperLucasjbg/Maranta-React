import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';

import { CartContext } from "../../context/CartContextProvider";
import { useContext } from "react";



const CartWidget = () => {
  const { totalAmount } = useContext(CartContext);

    return (
        <>
        <Button>
          <ShoppingCartIcon style={{ color:grey[50]}}/> 
          <p style={{color:grey[50], marginLeft:'1em'}}>{totalAmount}</p>           
        </Button>
        </>
    )
}

export default CartWidget
