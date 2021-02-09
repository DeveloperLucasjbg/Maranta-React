import './item.css';


const Item = ({product}) => {
    return (
            <div className="itemCard">
                <h5>{product.name}</h5>
                <p>{product.price}</p>
                <p>{product.stock}</p>
            </div>
    )
}

export default Item
