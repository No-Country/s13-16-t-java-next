"use client";

import React, { useState } from "react";
export default function FavIcon({ isFav }) {
  const [isFilled, setIsFilled] = useState(isFav);

  const handleClick = () => {
    setIsFilled(!isFilled);
    alert("Añadido a favoritos");
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={isFilled ? "red" : "none"}
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={`{ "text-red-400": isFilled,
        } h-5
      w-5`}
      onClick={handleClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 21.35l-1.45-1.32C5.4 14.25 2 11.28 2 7.5 2 4.42 4.42 2 7.5 2c1.74 0 3.41.81 4.5 2.09C13.09 2.81 14.76 2 16.5 2 19.58 2 22 4.42 22 7.5c0 3.78-3.4 6.75-8.55 12.54L12 21.35z"
      />
    </svg>
  );
}
