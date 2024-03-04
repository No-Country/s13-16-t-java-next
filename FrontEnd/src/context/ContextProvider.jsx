"use client";
import React, { createContext, useState, } from "react";
export const Context = createContext();

export default function ContextProvider({ children }) {
  const [isLogged, setIsLogged] = useState(() => {
    let storedLogged

    if (typeof window !== 'undefined') {
      storedLogged = localStorage.getItem('isLogged')
    }

    return storedLogged ? storedLogged : false
  });

  function logOut() {
    setIsLogged(false);
    if (typeof window !== "undefined") {
      localStorage.removeItem("isLogged");
      localStorage.removeItem("userLoggedId");
      localStorage.removeItem("profileId");
    }
  }

  return (
    <Context.Provider
      value={{
        isLogged,
        setIsLogged,
        logOut
      }}
    >
      {children}
    </Context.Provider>
  );
}
