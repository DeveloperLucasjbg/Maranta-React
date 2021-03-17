import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";
import "./clase.css";
import { React } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ButtonAppBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <img
            src="./logo.png"
            alt="Maranta Hoja"
            style={{ width: "2.7rem", marginRight: "0.5em" }}
          />
          <Typography variant="h6" className={classes.title}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                fontFamily: "Poiret One",
                fontSize: "1.6rem",
              }}
            >
              MARANTA
            </Link>
          </Typography>
          <div className="clase">
            <Link to="/">Home</Link>
            <Link to="/categorias">Categorias</Link>
            <Link to="/we">Nosotros</Link>
            <Link to="/contact">Contacto</Link>
          </div>
          <AccountCircleIcon />

          <CartWidget />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default ButtonAppBar;
