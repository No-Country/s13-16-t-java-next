"use client";

import React, { createContext, useState } from "react";
import data from "@/src/data/data.json";
export const Context = createContext();

export default function ContextProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [publications, setPublications] = React.useState(data);
  const idUser = 2;

  return (
    <Context.Provider
      value={{ isLogged, setIsLogged, publications, setPublications, idUser }}
    >
      {children}
    </Context.Provider>
  );
}
