"use client";

import React, { useContext, useEffect } from "react";
import { Context } from "../../context/ContextProvider";
import { useRouter } from "next/navigation";
import NotificationsPost from "../../components/NotificationsPost";

export default function NotificationsPage() {
  const { isLogged } = useContext(Context);
  const router = useRouter();

  useEffect(() => {
    if (!isLogged) {
      router.push("/login");
    }
  }, [isLogged, router]);

  return (
    <section className="mx-auto mb-16 mt-32 flex min-h-[80vh] w-11/12 max-w-[900px] flex-col justify-start gap-y-8 text-black">
      <NotificationsPost />
    </section>
  );
}
