import "./itemInWidget.css";
import { useContext } from "react";
import { DataBaseContext } from '../../context/DataBaseContextProvider';

const ItemInWidget = ({product, quantity}) => {
    const { products } = useContext(DataBaseContext)
    let itemTorender = products.find((e) =>{
        return e.id === product
        })

  return (
    <div className='itemInWidget'>
      <h4>{quantity}</h4>
      <img className='imgInWidget' src={itemTorender.img_path} alt={itemTorender.name}/>
      <h4>{itemTorender.name}</h4>
      <h4>{itemTorender.price}</h4>
      <h4>totalXproduct</h4>
    </div>
  );
};
export default ItemInWidget;
