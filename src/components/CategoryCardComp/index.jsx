import "./clase.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";


const useStyles = makeStyles((theme) => ({
    root: {
    Width: "50",
    },
    media: {
      height:0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      marginLeft: "auto",
    },
    link: {
      textDecoration:'none',
    }
  }));
function CategoryCardComp({categoryId, name, categoryImg}) {
    const classes = useStyles();
    
    return (
        <div className="contenedorInterno">
          <Link className={classes.link} to={`/categorias/${categoryId}`}>
        <Card className={classes.root}>
          <CardHeader title={name} />
          <CardMedia
            className={classes.media}
            image={categoryImg}
            />
        </Card>
            </Link>
      </div>
    )
}

export default CategoryCardComp
