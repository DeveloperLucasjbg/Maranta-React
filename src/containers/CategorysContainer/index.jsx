import React from "react";
import "./clase.css";
import CategoryCardComp from "../../components/CategoryCardComp";

const CategorysContainer = () => {
  const manyCategorys = [
    { id: 1, name: "Plantas con maceta" },
    { id: 2, name: "Colgantes" },
    { id: 3, name: "Herramientas y Utiles" },
  ];

  return (
    <div className="contenedor">
      {manyCategorys.map((e) => {
        let name = e.name;
        let id = e.id;
        return <CategoryCardComp name={name} categoryId={id} />;
      })}
    </div>
  );
};
export default CategorysContainer;
