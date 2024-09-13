import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserContexProvider = ({ children }) => {
  const [isUserLogged, setIsUserLogged] = useState(true);

  const loginUser = () => {
    setIsUserLogged(true);
  };

  const logoutUser = () => {
    setIsUserLogged(false);
  };

  return (
    <UserContext.Provider value={{ isUserLogged, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
