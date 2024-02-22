'use client'

import Link from 'next/link';
import React, { useContext, useEffect } from "react";
import { Context } from "../../context/ContextProvider";
import { useRouter } from "next/navigation";
import NotificationsPost from '../../components/NotificationsPost'

export default function NotificationsPage() {
    const { isLogged } = useContext(Context);
    const router = useRouter();

    // Redirige a la página de login si el usuario no está autenticado
    useEffect(() => {
        if (!isLogged) {
            router.push("/login");
        }
    }, [isLogged, router]);

    return (
        <section className="w-11/12 max-w-[900px] my-16 mx-auto min-h-[100vh] flex flex-col gap-y-8 justify-center text-black">
            {isLogged ? (
                <NotificationsPost />
            ) : (
                <>
                    <p className="text-center">No tenes ninguna<br className="block md:hidden" /> notificación todavía</p>
                    <Link href={'/explorar'} className="text-secondary-violet">Explorar</Link>
                </>
            )}
        </section>
    );
}