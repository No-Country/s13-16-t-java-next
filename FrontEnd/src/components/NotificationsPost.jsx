import Image from "next/image"
import img from '../assets/profile/Rectangle-3.png'

export default function NotificationsPost(){

    const notifications = [
        {id: 1, imgProfile: img, name: 'Usuario 123456', msj: 'Le puso me gusta a tu publicación', time: '12:30'},
        {id: 2, imgProfile: img, name: 'Usuario 123456', msj: 'Le puso me gusta a tu publicación', time: '12:30'},
        {id: 3, imgProfile: img, name: 'Usuario 123456', msj: 'Le puso me gusta a tu publicación', time: '12:30'},
        {id: 4, imgProfile: img, name: 'Usuario 123456', msj: 'Le puso me gusta a tu publicación', time: '12:30'}
    ]

    return(<>
        {notifications.map((notification)=>(
            <NotificationCard key={notification.id} imgProfile={notification.imgProfile} name={notification.name} msj={notification.msj} time={notification.time}/>
        ))}
    </>)
}

export function NotificationCard({imgProfile, name, msj, time}){
    return(
        <article className="relative w-full bg-gray-dark-bg p-2 rounded-2xl flex items-center">
            <Image src={imgProfile} alt="Imagen de perfil" height={90} width={90} className="rounded-full m-2 md:w-[150px] md:h-[150px]"></Image>
            <div className="flex flex-col md:ml-6 md:text-xl text-dark-text">
                <h3 className="mb-2 font-bold pr-12">{name}</h3>
                <p>{msj}</p>
            </div>
            <p className="absolute top-4 right-3 md:right-6">{time}</p>
        </article>
    )
}