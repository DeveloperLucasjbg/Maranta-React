import Item from "../Item"
import Grid from '@material-ui/core/Grid';
const ItemList = ({ products }) => {
    return (
        <Grid container spacing={2}>
          {products.map((products) => {
              return  <Item key={products.id} product={products}/>
          })}  
        </Grid>
    )   
}
export default ItemList
