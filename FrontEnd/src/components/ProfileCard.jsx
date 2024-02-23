'use client';

import Image from "next/image"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import img from '../assets/profile/Rectangle-2.png'
import ConfigIcon from '../components/Icons/ConfigIcon'

export default function ProfileCard() {
    const pathname = usePathname();

    const profileData = {
        name: 'Nombre del usuario', 
        donations: {tittle:'Donaciones', amount:'123'}, 
        ratings: {tittle:'Valoraciones', amount:'123'}, 
        favorites: {tittle:'Favoritos', amount:'123'}, 
        interests: ['Papeles', 'Plásticos', 'Maderas', 'Botellas de vidrio'] ,
    };

    const links = [
        { name: 'Publicaciones', href: '/perfil'},
        { name: 'Valoraciones', href: '/perfil/valoraciones'},
        { name: 'Favoritos', href: '/perfil/favoritos'},
      ];

  return (
  <article className="w-11/12 relative max-[855px]:w-full mx-auto border-solid border-2 bg-white border-white rounded-[2.5rem] max-[855px]:rounded-none h-fit shadow-xl max-[855px]:shadow-none -translate-y-16">
    <div className="mb-8 flex flex-col min-[855px]:flex-row justify-between">
        <Image src={img} alt="" height={200} width={200} className="bg-gray-300 rounded-full ml-10 -translate-y-16 border-white border-4 border-solid" />
        <div className="mt-8 max-[855px]:-mt-8">
            <h2 className="text-4xl max-[855px]:ml-10">{profileData.name}</h2>
            <div className="max-[855px]:mt-12 flex max-sm:flex-wrap gap-x-10 mt-6 max-[855px]:w-11/12 max-[855px]:mx-auto">
                <LabelCard tittle={profileData.donations.tittle} value={profileData.donations.amount}/>
                <LabelCard tittle={profileData.ratings.tittle} value={profileData.ratings.amount}/>
                <LabelCard tittle={profileData.favorites.tittle} value={profileData.favorites.amount}/>
            </div>
        </div>
        <div className="mt-8 lg:pr-20 max-[855px]:mt-12 max-[855px]:w-11/12 max-[855px]:mx-auto">
            <h3 className="mb-4">Intereses</h3>
            <div className="flex gap-4 w-52 max-[855px]:w-full flex-wrap">
                {profileData.interests.map((interest) => (
                    <InterestCard tittle={interest}/>
                ))}
            </div>
        </div>
    </div>
    <nav className="border-t-2 max-[855px]:border-b-2 w-11/12 max-[855px]:w-full  mx-auto border-gray-bg flex max-[855px]:justify-center min-[855px]:gap-x-6">
        {links.map((link) => (
            <Link 
                className={`my-6 py-2 px-6 max-[855px]:px-4 rounded-3xl hover:scale-105 ${pathname === link.href ? 'bg-primary-green text-white' : ''}`}
                key={link.name}
                href={link.href}>
            {link.name}
            </Link>
        ))}
    </nav>
    <Link href={'/configuracion/perfil'} className="absolute top-4 right-8 bg-gray-dark-bg rounded-md p-1 hover:bg-gray-bg">
        <ConfigIcon width="30" height="30"/>
    </Link>
  </article>)
}


export function InterestCard({tittle}){
    return(
        <p className="bg-gray-dark-bg rounded-3xl w-fit px-4 py-[4px]">{tittle}</p>
    )
}

export function LabelCard({tittle, value}){
    return(
        <div className="text-center">
            <h3 className="mb-2">{tittle}</h3>
            <p className="text-xl">{value}</p>
        </div>
    )
}
