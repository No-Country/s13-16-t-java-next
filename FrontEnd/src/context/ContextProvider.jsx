"use client";
import React, { createContext, useState, useEffect } from "react";
export const Context = createContext();

export default function ContextProvider({ children }) {
  const [isLogged, setIsLogged] = useState(
    () =>
      JSON.parse(
        typeof window !== "undefined" && localStorage.getItem("isLogged"),
      ) || false,
  );

  const [isActive, setIsActive] = useState(() => {
    if (typeof window !== "undefined") {
      const storedIsActive = localStorage.getItem("isActive");
      return storedIsActive ? JSON.parse(storedIsActive) : false;
    } else {
      return false;
    }
  });

  const idUser = "ff789b5a-f60e-4830-8081-b6cca433da59";

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
        idUser,
      }}
    >
      {children}
    </Context.Provider>
  );
}
