'use client';

import BlogPost from '../../components/BlogPost'
import InputSearch from '../../components/InputSearch'
import React, { useContext } from "react";
import { Context } from "../../context/ContextProvider";
import { useRouter } from "next/navigation";

export default function BlogPage({searchParams}) {
    const queryParam = searchParams?.search || ''
    const { isLogged } = useContext(Context);
    const router = useRouter();

    return(<>
        {isLogged ? (
            <section className="mt-28 w-11/12 mx-auto">
                <InputSearch query={'search'} placeHolder={'Busca noticia'}/>
                <BlogPost query={queryParam} />
            </section>
        ) : (
            router.push("/login")
        )}
    </>)
}