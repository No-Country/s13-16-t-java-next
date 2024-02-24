"use client";

export default function Button({ children, handle, ...props }) {
  return (
    <button className={`${props.className}`} onClick={handle}>
      {children}
    </button>
  );
}
