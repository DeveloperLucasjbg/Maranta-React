import { createContext, useState, useEffect } from "react";
import { getFirestore } from "../firebase";

export const DataBaseContext = createContext();

const DataBaseProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productsColection = db.collection("PRODUCTOS");
    productsColection.get().then((value) => {
      let dbCatcher = value.docs.map(element => element.data());
      setProducts( dbCatcher );
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
