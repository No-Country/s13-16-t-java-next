import ContextProvider from "@/context/ContextProvider";

export function Providers({ children }) {
  return <ContextProvider>{children}</ContextProvider>;
}
