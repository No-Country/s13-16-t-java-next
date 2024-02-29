"use client";
import React, { createContext, useState, useEffect } from "react";
export const Context = createContext();

export default function ContextProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  const [isActive, setIsActive] = useState(() => {
    if (typeof window !== "undefined") {
      const storedIsActive = localStorage.getItem("isActive");
      return storedIsActive ? JSON.parse(storedIsActive) : false;
    } else {
      return false; //Verificaciones para que next sepa que esto es del lado del cliente
    }
  });

  useEffect(() => {
    // Guardar en localStorage solo si se está ejecutando en el lado del cliente
    if (typeof window !== "undefined") {
      localStorage.setItem("isActive", JSON.stringify(isActive));
    }
  }, [isActive]);
  const idUser = "ff789b5a-f60e-4830-8081-b6cca433da59";

  return (
    <Context.Provider
      value={{
        isLogged,
        setIsLogged,
        idUser,
        isActive,
        setIsActive,
      }}
    >
      {children}
    </Context.Provider>
  );
}
