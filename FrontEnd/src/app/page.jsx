"use client";

import { useEffect, useState } from "react";
import HomeLogin from "../components/HomeLogin/HomeLogin";

import HomePage from "./HomePage";

export default function Home() {
  const isLogged =
    typeof window !== "undefined" && localStorage.getItem("isLogged");

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return <>{isLogged ? <HomeLogin /> : <HomePage />}</>;
}
