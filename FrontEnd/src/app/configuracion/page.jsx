"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return router.push("/configuracion/perfil");
}
