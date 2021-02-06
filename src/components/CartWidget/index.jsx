import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';

const CartWidget = () => {
    return (
        <>
        <Button>
          <ShoppingCartIcon style={{ color:grey[50]}}/>            
        </Button>
        </>
    )
}

export default CartWidget
