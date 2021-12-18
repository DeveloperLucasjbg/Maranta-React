import { Button } from "@material-ui/core";
import { React, useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContextProvider";
import "./UserOptionsContenedor.css";

const AcountOptions = () => {
  const { trigger, setTrigger, userName, logOut, logIn, register } =
    useContext(UserContext);
  const [triggerClass, setTriggerClass] = useState("hidden");

  const mapClick = (e) => {
    let obj = e.target.className;
    if (obj !== "bottom") {
      setTriggerClass("hidden");
      setTrigger(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", mapClick);
    window.addEventListener("scroll", mapClick);

    return () => {
      window.removeEventListener("click", mapClick, false);
      window.removeEventListener("scroll", mapClick, false);
      trigger ? setTriggerClass("") : setTriggerClass("hidden");
    };
  }, [trigger]);

  return (
    <div className={`UserOptionsContenedor ${triggerClass}`}>
      <p>Opciones de Usuario</p>
      {userName !== "" ? (
        <>
          <h3>Usuario: {userName}</h3>
          <Button onClick={() => logOut()} variant="contained">
            Log Out
          </Button>
        </>
      ) : (
        <>
          <Button onClick={() => logIn()} variant="contained">
            Log In
          </Button>
          <Button onClick={() => register()} variant="contained">
            Register
          </Button>
        </>
      )}
    </div>
  );
};

export default AcountOptions;
