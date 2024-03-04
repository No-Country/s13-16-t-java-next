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
