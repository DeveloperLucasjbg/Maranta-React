import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";

import { UserContext } from "../../context/UserContextProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "auto",
    maxHeight: "auto",
    margin: 9,
  },
  media: {
    height: 88,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
  },
}));

const Item = ({ product }) => {
  const classes = useStyles();
  const { favsToogle, favs } = useContext(UserContext);

  console.log(favs);


  const [favState, setFavState] = useState(false);

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton
            aria-label="settings"
            onClick={() => {
              setFavState(!favState);
              return favsToogle(product.id, favState);
            }}
          >
            {favState ? (
              <FavoriteIcon color={"secondary"}/>
            ) : (
              <FavoriteBorderIcon />
            )}  
          </IconButton>
        }
        title={product.name}
        subheader="Planta de Interior"
      />
      <CardMedia
        className={classes.media}
        image={product.img_path}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">${product.price}</IconButton>
        <IconButton
          className={clsx(classes.expand)}
          onClick={""}
          aria-label="show more"
        >
          <Link to={`/category/${product.name}`}>
            <IconButton component={AddCircleOutlineOutlinedIcon} />
          </Link>
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default Item;
