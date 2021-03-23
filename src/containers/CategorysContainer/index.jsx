import React from "react";
import "./clase.css";
import CategoryCardComp from "../../components/CategoryCardComp";

const CategorysContainer = () => {
  const manyCategorys = [
    { id: 1, name: "Plantas de interior" , categoryImg:'https://iberflora.feriavalencia.com/wp-content/uploads/2019/05/plantas-de-interior.jpg'},
    { id: 2, name: "Plantas Colgantes" , categoryImg:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/elle-decorar-plantas-colgantes-1-1558445742.jpg'},
    { id: 3, name: "Masetas y Portamacetas", categoryImg:'https://http2.mlstatic.com/D_NQ_NP_959298-MLA43633923779_092020-O.webp' },
    { id: 3, name: "Accesorios", categoryImg:'https://http2.mlstatic.com/D_NQ_NP_959298-MLA43633923779_092020-O.webp' }
  ];

  return (
    <div className="contenedor">
      {manyCategorys.map((e) => {
        let name = e.name;
        let id = e.id;
        let categoryImg = e.categoryImg;
        return <CategoryCardComp key={id} name={name} categoryId={id} categoryImg={categoryImg}/>;
      })}
    </div>
  );
};
export default CategorysContainer;
