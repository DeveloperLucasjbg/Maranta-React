import "./cartItemContainer.css";

const CartItem = ({ product }) => {
  return (
    <div className="cartItemContainer">
      <h3>{product.cant}</h3>
      <img src={`/img/${product.url}`} alt={product.name} />
      <h3>{product.name}</h3>
      <h3>$ {product.price}</h3>
      <button onClick=""> X</button>
    </div>
  );
};

export default CartItem;
