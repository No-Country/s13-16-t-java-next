"use client";

import { date as tzDate, format } from "@formkit/tempo";
import { useEffect, useState } from "react";
import Image from "next/image";
import CommentSubmenu from "./CommentSubmenu";

export default function Coment({ coment }) {
  const { description, date: dateTime } = coment;

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const DATE = tzDate(`${dateTime}Z`, userTimeZone);

  const dateShortFormated = format(DATE, "h:mm A");

  const dateLongFormated = format(DATE, "MMMM D, YYYY h:mm A");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3 p-3">
        <div className="flex items-center gap-2">
          <Image
            src={"/image/profileComent.png"}
            alt="image Profile"
            height={50}
            width={50}
            className=" rounded-full"
          />
          <div className="flex flex-col">
            <p>Usuario Fulano</p>
            <date
              className=" text-[12px] text-gray-400"
              dateTime={DATE}
              title={dateLongFormated}
            >
              {dateShortFormated}
            </date>
          </div>
        </div>
        <CommentSubmenu/> 
      </div>

      <p className="mb-2 text-justify text-sm">{description}</p>
    </div>
  );
}
