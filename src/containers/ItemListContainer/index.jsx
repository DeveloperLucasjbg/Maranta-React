import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import productos from "../../productos/productos.jsx";
import ItemList from "../../components/ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // setIsLoading(true);
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 1);
    });
    myPromise.then((result) => {
      setProducts(result);
    //   setIsLoading(false);
    });
  }, []);

//   if (isLoading) {
//     return <h2 className="itemListContainer">Cargando datos...</h2>;
//   }

  return (
    <div className="container">
      <ItemList products={products} />
    </div>
  );
}
export default ItemListContainer;
