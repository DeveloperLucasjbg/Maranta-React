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
        <ShoppingCartIcon style={{ color: "white" }} />
        <p style={{ color: "white", marginLeft: "0.2em" }}>{totalAmount}</p>
      </Button>
    </>
  );
};
export default CartWidget;
