import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [favs, setFavs] = useState([]);

  const isIdIn = (id) => favs.some((e) => e.id === id);

  const favsToogle = (id, boolean) => {
    if (isIdIn(id)){
      let newFavs = favs.map((e)=>
       e.id === id ? { ...e, id: id, state: !boolean } : e 
       )
       setFavs(newFavs);
    }else{
      setFavs([ ...favs, {id: id, state: !boolean }])
    }
  };
  
  
  return (
    <UserContext.Provider
      value={{
        favs,
        favsToogle
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
