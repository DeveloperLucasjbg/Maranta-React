import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import { CartContext } from "../../context/CartContextProvider";
import { useContext } from "react";

const CartWidget = () => {
  const { totalAmount, setTrigger, trigger } = useContext(CartContext);
  const handdlerTriger = () => {
    setTrigger(!trigger);
  };
  return (
    <>
      <Button onClick={handdlerTriger}>
        <ShoppingCartIcon style={{ color: "black" }} />
        <p style={{ color: "black", marginLeft: "0.3em", marginRight:'2em' }}>{totalAmount}</p>
      </Button>
    </>
  );
};
export default CartWidget;
