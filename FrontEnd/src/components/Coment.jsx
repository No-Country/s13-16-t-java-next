"use client";

import { date as tzDate, format } from "@formkit/tempo";
import { useEffect, useState } from "react";
import Image from "next/image";

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
      <div className="flex items-center gap-3 ">
        <Image
          src={"/image/profileComent.png"}
          alt="image Profile"
          height={50}
          width={50}
          className=" rounded-full"
        />
        <p >Usuario Fulano</p>
        <date
          className="text-[12px] text-gray-400"
          dateTime={DATE}
          title={dateLongFormated}
        >
          {dateShortFormated}
        </date>
      </div>
      <p className="text-justify text-sm mb-2">{description}</p>
    </div>
  );
}
