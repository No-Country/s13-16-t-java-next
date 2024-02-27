"use client";

import React, { createContext, useState, useEffect } from "react";
import data from "@/src/data/data.json";
export const Context = createContext();

export default function ContextProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [publications, setPublications] = React.useState(data);

  const [isActive, setIsActive] = useState(() => {
    const storedIsActive = localStorage.getItem("isActive");
    return storedIsActive ? JSON.parse(storedIsActive) : false;
  });

  useEffect(() => {
    localStorage.setItem("isActive", JSON.stringify(isActive));
  }, [isActive]);

  const idUser = 2;

  return (
    <Context.Provider
      value={{
        isLogged,
        setIsLogged,
        publications,
        setPublications,
        idUser,
        isActive,
        setIsActive,
      }}
    >
      {children}
    </Context.Provider>
  );
}
