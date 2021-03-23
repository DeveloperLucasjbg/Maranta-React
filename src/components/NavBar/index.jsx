import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";
import "./clase.css";
import { React, useContext, useState } from "react";
import { UserContext } from "../../context/UserContextProvider";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "#ffc0cb",
  },
  menuButton: {
    marginRight: theme.spacing(1),
    fontSize: 16,
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  color: {
    color: "#ffc0cb",
  },
}));

let logIn = true;

const NavBar = () => {
  const classes = useStyles();

  const { userName, setTrigger, trigger } = useContext(UserContext);

  const handdlerTriger = () => {
    setTrigger(!trigger);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#ffc0cb" }}>
        <Toolbar>
          <img
            src="./logo.png"
            alt="Maranta Hoja"
            style={{ width: "2.7rem", marginRight: "0.5em" }}
          />
          <Typography variant="h5" className={classes.title}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
                fontFamily: "Poiret One",
                fontSize: "1.6rem",
              }}
            >
              MARANTA
            </Link>
          </Typography>
          <Typography variant="h3" className={classes.menuButton}>
            <div className="clase">
              <Link to="/">INICIO</Link>
              <Link to="/categorias">CATEGORIAS</Link>
            </div>
          </Typography>

          <Button onClick={() => handdlerTriger()}>
            <p style={{ color: "black", marginRight: "0.5em" }}>{userName}</p>
            <AccountCircleIcon style={{ color: "black" }} />
          </Button>
          <CartWidget />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
