import { createContext, useState, useEffect } from "react";
import { getFirestore } from "../firebase";

export const DataBaseContext = createContext();

const DataBaseProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productsColection = db.collection("PRODUCTOS");
    productsColection.get().then((value) => {
     value.docs.map(element => {setProducts(element.data())})
    });
  }, []);
  return (
    <DataBaseContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </DataBaseContext.Provider>
  );
};
export default DataBaseProvider;
// setProduct([...[item]])
