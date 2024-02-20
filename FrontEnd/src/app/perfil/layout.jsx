import ProfileCard from '../../components/ProfileCard'
import Image from "next/image"

export default function Layout({children}) {
  return (
    <section className="mt-16 w-full mx-auto">
            <Image src="" alt="" height={30} width={100} layout="responsive" className="bg-gray-300 min-h-72" />
            <ProfileCard/>
            {children}
    </section>
  );
}