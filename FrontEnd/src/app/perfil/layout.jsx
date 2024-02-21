'use client';

import ProfileCard from '../../components/ProfileCard'
import Image from "next/image"
import { useRouter } from 'next/navigation';
import {Context} from '../../context/ContextProvider';
import { useContext } from 'react';

export default function Layout({children}) {
  const router = useRouter();
  const {isLogged} = useContext(Context)

  return (<>
    {isLogged? (
      <section className="mt-16 w-full mx-auto">
        <Image src="" alt="" height={30} width={100} layout="responsive" className="bg-primary-green min-h-72" />
        <ProfileCard/>
        {children}
      </section>
    ):(
      router.push('/login')
    )}
  </>);
}