'use client'

import React, { useContext, useEffect } from "react";
import { Context } from "../../context/ContextProvider";
import { useRouter } from "next/navigation";
import NotificationsPost from '../../components/NotificationsPost'
import {NotificationsCartsSkeleton} from '../../components/skeletons'
import { Suspense } from 'react';

export default function NotificationsPage() {
    const { isLogged } = useContext(Context);
    const router = useRouter();

    useEffect(() => {
        if (!isLogged) {
            router.push("/login");
        }
    }, [isLogged, router]);

    return (
        <section className="w-11/12 max-w-[900px] mb-16 mt-32 mx-auto min-h-[80vh] flex flex-col gap-y-8 justify-start text-black">
            <Suspense fallback={<NotificationsCartsSkeleton/>}>
                <NotificationsPost />
            </Suspense>
        </section>
    );
}