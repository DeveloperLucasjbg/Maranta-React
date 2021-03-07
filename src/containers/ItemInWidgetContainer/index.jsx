import { useContext } from 'react'
import ItemInWidget from '../../components/ItemInWidget'
import './itemInWidgetContainer.css'
import { CartContext } from "../../context/CartContextProvider";



const ItemInWidgetContainer = () => {
    const { cartProducts, totalAmount, trigger } = useContext(CartContext);

    let triggerClass = 'hidden'
        trigger ? triggerClass = '' : triggerClass = 'hidden';
    return (

       
        <div className= {`itemInWidgetContainer ${triggerClass}`}>
            {/* {
               cartProducts.map(e => {
                    return <ItemInWidget key={e.categoryID} cartProducts={cartProducts}/>;
                  })
            } */}
            <ItemInWidget />;
        </div>
    )
}

export default ItemInWidgetContainer
