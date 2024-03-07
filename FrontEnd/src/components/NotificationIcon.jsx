"use client";
import { IconBell } from "./Icons/SearchIcon";
import Link from "next/link";
import { useGetNotifications } from "../hooks/useGetNotifications";

export default function NotificationIcon() {
  const { unread } = useGetNotifications();
  return (
    <Link href={"/notificaciones"} className="relative">
      <IconBell />
      {unread?.length > 0 && (
        <div className="unread-notification absolute -right-2 -top-2 hidden md:flex">
          {unread?.length}
        </div>
      )}
    </Link>
  );
}
