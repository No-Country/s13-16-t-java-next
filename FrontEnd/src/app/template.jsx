import React from "react";

export default function template({ children }) {
  return (
    <main className="mx-auto min-h-[calc(100dvh_-_296px)] min-[850px]:min-h-[calc(100dvh_-_156px)]">
      {children}
    </main>
  );
}
