import './itemDetail.css'

const ItemDetail = ({detail}) => {
    return (
        <div className="detail">
            <h3>Detalle del producto:</h3> 
            <h2>{detail.name}</h2>
            <h3>ID: {detail.id}</h3>
            <h3>{detail.price}</h3>
            <h3>{detail.stock}</h3>
        </div>
    )
}

export default ItemDetail;
