"use client";

import { useContext } from "react";
import { Context } from "../context/ContextProvider";

import HomeLogin from "../components/HomeLogin/HomeLogin";

import HomePage from "./HomePage";

export default function Home() {
  const { isLogged } = useContext(Context);

  return <>{isLogged ? <HomeLogin /> : <HomePage />}</>;
}
