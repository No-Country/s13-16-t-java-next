import React from "react";

export default function template({ children }) {
  return (
    <main className="mx-auto min-h-[calc(100dvh_-_296px)] max-w-7xl pt-20 min-[850px]:min-h-[calc(100dvh_-_156px)]">
      {children}
    </main>
  );
}
