import Item from "../Item";
import { useContext, useState, useEffect } from "react";
import { DataBaseContext } from "../../context/DataBaseContextProvider";
import { useParams } from "react-router-dom";

const Category = () => {
  const { id } = useParams();
  const { products } = useContext(DataBaseContext);
  const productToRender = products.filter((e) => e.categoryId == id);

  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    if (id === "1") {
      setCategoryName("Plantas de interior con Macetas");
    } else if (id === "2") {
      setCategoryName("Plantas Colgantes");
    } else if (id === "3") {
      setCategoryName("Masetas y accesorios");
    } else {
      setCategoryName("categoria sin asignar");
    }
  }, []);

  return (
    <>
      <h3
        style={{ textAlign: "center", paddingTop: "2em", fontFamily: "Roboto" }}
      >
        {categoryName}
      </h3>
      <div className="grid">
        {productToRender.map((e) => {
          return <Item key={e.id} product={e} />;
        })}
      </div>
    </>
  );
};

export default Category;
