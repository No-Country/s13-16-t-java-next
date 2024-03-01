"use client";

export default function Button({ children, handle, ...props }) {
  return (
    <button
      disabled={props.disabled}
      className={`${props.className}`}
      onClick={handle}
      type={`${props.type}`}
    >
      {children}
    </button>
  );
}
