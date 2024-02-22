'use client'

import Link from 'next/link';
import React, { useContext } from "react";
import { Context } from "../../context/ContextProvider";
import { useRouter } from "next/navigation";
import NotificationsPost from '../../components/NotificationsPost'

export default function NotificationsPage() {
    const { isLogged } = useContext(Context);
    const router = useRouter();
    return(<>
    {isLogged? (
        true? (
        <section className="w-11/12 max-w-[900px] my-16 mx-auto min-h-[100vh] flex flex-col gap-y-8 justify-center text-black">
            <h1 className="my-14">Notificaciones</h1>
            <NotificationsPost/>
        </section>
        ):(
        <section className="w-11/12 mx-auto min-h-[100vh] flex flex-col gap-y-8 justify-center text-black items-center">
            <p className="text-center">No tenes ninguna<br className="block md:hidden"/> notificación todavía</p>
            <Link href={'/explorar'} className="text-secondary-violet">Explorar</Link>
        </section>
        )
    ):(
        router.push("/login")
    )}
    </>)
}