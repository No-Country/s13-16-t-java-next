import ProfileLayout from "@/src/components/Perfil/ProfileLayout";

export default function Layout({ children }) {
  return (
    <section className="mx-auto mt-16 w-full">
      <ProfileLayout />
      {children}
    </section>
  );
}
