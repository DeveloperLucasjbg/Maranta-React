import Item from "../Item";
import "./css.css";
const ItemList = ({ products }) => {
  return (
    <div className="grid">
      {products.map(products => {
        return <Item key={products.id} product={products} />;
      })}
    </div>
  );
};
export default ItemList;
