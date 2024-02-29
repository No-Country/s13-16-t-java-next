"use client";
import React, { useContext, useEffect } from "react";
import { Context } from "../../context/ContextProvider";
import { useRouter } from "next/navigation";

export default function BlogLayout({ children }) {
  const { isLogged } = useContext(Context);
  const router = useRouter();

  useEffect(() => {
    if (!isLogged) {
      router.push("/login");
    }
  });
  return <section className="mx-auto mt-28 w-11/12">{children}</section>;
}
