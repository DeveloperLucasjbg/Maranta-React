import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [trigger, setTrigger] = useState(false);
  const [userName, setUserName] = useState("Lucas");

  let favs = [{}];
  const getFavs = () => {
    let storageToFavs = JSON.parse(localStorage.getItem("userFavs"));
    favs = storageToFavs
    return storageToFavs;
  };

  // falta todo en firestore / formulario de registro / login modal
  const logOut = () => {
    setUserName("");
  };
  const logIn = () => {
    setUserName("Lucas");
  };
  const register = () => {
    let tuNombre = prompt();
    setUserName(tuNombre);
  };

  ////

  const isIdIn = (id) => favs.some((e) => e.id === id);

  const favsToogle = (id, boolean) => {
    if (isIdIn(id)) {
      let newFavs = favs.map((e) =>
        e.id === id ? { ...e, id: id, state: !boolean } : e
      );
      favs =(newFavs);
    } else {
      favs = ([...favs, { id: id, state: !boolean }]);
    }

    // en que momento ejecutarlo para que este actualizado el valor
    let FavsToStorageYUser = favs.filter((e) => e.state === true);
    localStorage.setItem("userFavs", JSON.stringify(FavsToStorageYUser));
  };

  return (
    <UserContext.Provider
      value={{
        favs,
        favsToogle,
        getFavs,
        trigger,
        setTrigger,
        userName,
        logOut,
        logIn,
        register,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
