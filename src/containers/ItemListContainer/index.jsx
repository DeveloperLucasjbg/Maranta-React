import { useContext } from "react";
import "./ItemListContainer.css";
import ItemList from "../../components/ItemList";
import { DataBaseContext } from '../../context/DataBaseContextProvider';

function ItemListContainer() {

  const { products } = useContext(DataBaseContext);

  return (
    <div className="container">
      <ItemList products={products} />
    </div>
  );
}
export default ItemListContainer;
