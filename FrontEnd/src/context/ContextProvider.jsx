"use client";
import React, { createContext, useState, } from "react";
export const Context = createContext();

export default function ContextProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  () => {
    const userLogged =
      typeof window !== "undefined" && localStorage.getItem("isLogged");
    if (userLogged === true) {
      setIsLogged(true);
    } else {
      return false;
    }
  };

  return (
    <Context.Provider
      value={{
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </Context.Provider>
  );
}
