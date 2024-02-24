import Image from "next/image";
import img from "../assets/profile/Rectangle-3.png";
import Link from "next/link";

// eslint-disable-next-line
async function fetchNoti() {
  const res = await fetch("http://localhost:3001/notification");
  const data = res.json();
  return data;
}

export default async function NotificationsPost() {
  const notifications = [
    {
      id: 1,
      name: "Usuario 123456",
      msj: "Le puso me gusta a tu publicación",
      time: "12:30",
    },
    {
      id: 2,
      name: "Usuario 123456",
      msj: "Le puso me gusta a tu publicación",
      time: "12:30",
    },
    {
      id: 3,
      name: "Usuario 123456",
      msj: "Le puso me gusta a tu publicación",
      time: "12:30",
    },
    {
      id: 4,
      name: "Usuario 123456",
      msj: "Le puso me gusta a tu publicación",
      time: "12:30",
    },
  ];

  /* const notifications = await fetchNoti();     <--------------- Descomentar para el uso de fetching de datos y eliminar el mock de arriba */

  return (
    <>
      {notifications.length > 0 ? (
        notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            imgProfile={img}
            name={notification.name}
            msj={notification.msj}
            time={notification.time}
          />
        ))
      ) : (
        <div className="mx-auto mt-40 flex flex-col gap-y-8 text-center text-black">
          <p className="text-center">
            No tenes ninguna
            <br className="block md:hidden" /> notificación todavía
          </p>
          <Link href={"/explorar"} className="text-secondary-violet">
            Explorar
          </Link>
        </div>
      )}
    </>
  );
}

export function NotificationCard({ imgProfile, name, msj, time }) {
  return (
    <article className="relative flex w-full items-center rounded-2xl bg-gray-dark-bg p-2">
      <Image
        src={imgProfile}
        alt={`${name} imagen de perfil`}
        height={90}
        width={90}
        className="m-2 rounded-full md:h-[150px] md:w-[150px]"
      ></Image>
      <div className="flex flex-col text-dark-text md:ml-6 md:text-xl">
        <h3 className="mb-2 pr-12 font-bold">{name}</h3>
        <p>{msj}</p>
      </div>
      <p className="absolute right-3 top-4 md:right-6">{time}</p>
    </article>
  );
}
