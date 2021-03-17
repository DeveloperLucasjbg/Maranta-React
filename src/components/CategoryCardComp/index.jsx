import "./clase.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "500",
    },
    media: {
      height: 13,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      marginLeft: "auto",
    },
  }));
  
function CategoryCardComp({categoryId, name}) {
    const classes = useStyles();
    
    return (
        <div className="contenedorInterno">
          <Link to={`/categorias/${categoryId}`}>
        <Card className={classes.root}>
          <CardHeader title={name} subheader="con maceta" />
          <CardMedia
            className={classes.media}
            image="https://iberflora.feriavalencia.com/wp-content/uploads/2019/05/plantas-de-interior.jpg"
            />
        </Card>
            </Link>
      </div>
    )
}

export default CategoryCardComp
