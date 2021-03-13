import Button from "@material-ui/core/Button";
import "./css.css";

const ItemInWidgetContenedor = () => {
  return (
    <div>
      <h2>Total : 123123</h2>
      <div>
        <Button className="button" variant="contained"> Ir al carro</Button>
        <Button className="button" variant="contained" color="Primary">CheckOut</Button>
      </div>
    </div>
  );
};

export default ItemInWidgetContenedor;
