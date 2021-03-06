import Item from "../Item";
import "./css.css";
const ItemList = ({ products }) => {
  return (
    <div className="grid">
      {products.map(products => {
        return <Item key={products.categoryID} product={products} />;
      })}
    </div>
  );
};
export default ItemList;
