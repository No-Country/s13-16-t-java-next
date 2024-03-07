"use client";
import Image from "next/image";
import img from "../assets/profile/Rectangle-3.png";
import Link from "next/link";
import { useGetNotifications } from "../hooks/useGetNotifications";
import { NotificationsCartsSkeleton } from "./skeletons";
import { useEffect } from "react";
import { realDateTimeDiff } from "../utils/functions";
import { tzDate } from "@formkit/tempo";

export default function NotificationsPost() {
  const { data, error, isLoading, markAsRead } = useGetNotifications();

  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const endDate = new Date();

  useEffect(() => {
    setTimeout(() => {
      if (!error) markAsRead();
    }, 3000);
  });

  if (error) {
    return (
      <p className="text-center">
        Algo salió mal:
        <br /> {error.message}
      </p>
    );
  }
  if (isLoading) return <NotificationsCartsSkeleton />;
  return (
    <>
      {data?.length > 0 ? (
        data.map((notification) => {
          const { id, name, content, isRead, postId, date } = notification;
          const DATE = tzDate(`${date}Z`, userTimeZone);
          const DATETIME = realDateTimeDiff(DATE, endDate);
          return (
            <NotificationCard
              key={id}
              imgProfile={img}
              name={name}
              msj={content}
              time={DATETIME}
              placeholder="blur"
              blurDataURL={img}
              read={isRead}
              postId={postId}
            />
          );
        })
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

export function NotificationCard({
  imgProfile,
  name,
  msj,
  time,
  read,
  postId,
}) {
  return (
    <Link
      href={`/publicaciones/${postId}`}
      className={` relative flex w-full items-center rounded-2xl bg-gray-dark-bg p-2`}
    >
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
      <div
        className={`${!read ? "absolute right-1 top-1 block h-4 w-4 rounded-full bg-red-500" : ""}`}
      ></div>
    </Link>
  );
}
