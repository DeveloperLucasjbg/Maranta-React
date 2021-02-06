import Button from '@material-ui/core/Button';
import './ItemCount.css';

const ItemCount = ({stock , onAdd , onSubstrac, contador, comprado,toCart, clearCart}) =>{
   
return(
    <div className="countContainer">
        <div className="imagenDmentira">
            <p>{comprado}</p>
        </div>
        <div className="padd">
            {(contador > 0 ? 
            <Button onClick ={onSubstrac} className="button" variant="outlined"color="primary">-</Button> 
            : <Button className="button" variant="outlined"color="">-</Button> 
            )}
            <input type="text" value={contador}/>

             {(contador < stock ?             
            <Button onClick ={onAdd} className="button" variant="outlined"color="primary">+</Button>
            : <Button  className="button" color="primary">+</Button>
            )}
        </div>  
        <Button onClick={toCart} className="" variant="outlined"color="primary">Agregar al carro</Button>
        <Button onClick={clearCart} className="" variant="outlined"color="secondary">Vaciar carro</Button>
    </div>
    );
}

export default ItemCount;