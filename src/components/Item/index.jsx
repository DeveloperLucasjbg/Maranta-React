import './item.css';
import { Link } from 'react-router-dom';


const Item = ({product}) => {
    
    return (
            <div className="itemCard">
                <img src={`/img/${product.url}`} alt={product.name} width='200'/>
                <h5>{product.name}</h5>
                <p>{product.price}</p>
                <p>{product.stock}</p>
                <Link to={`/category/${product.name}`}>Ver mas</Link>
             </div>           
    )
}   
export default Item;
