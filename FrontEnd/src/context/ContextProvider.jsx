"use client";
import React, { createContext, useState, useEffect } from "react";
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

  const [isActive, setIsActive] = useState(() => {
    if (typeof window !== "undefined") {
      const storedIsActive = localStorage.getItem("isActive");
      return storedIsActive;
    } else {
      return false;
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isActive", JSON.stringify(isActive));
    }
  }, [isActive]);

  return (
    <Context.Provider
      value={{
        isLogged,
        setIsLogged,
        isActive,
        setIsActive,
      }}
    >
      {children}
    </Context.Provider>
  );
}
