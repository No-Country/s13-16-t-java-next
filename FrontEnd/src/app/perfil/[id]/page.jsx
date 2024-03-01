import { getProfile } from "@/src/lib/api";

export default async function Page({ params }) {
  const ProfileData = await getProfile(params.id);

  const { bio, userResponseDTO } = ProfileData;

  const { name, lastName, email, phone, location_id, birthdate } =
    userResponseDTO;

  return (
    <>
      {ProfileData && (
        <div>
          <h1>Perfil</h1>
          <h2>
            {name} {lastName}
          </h2>
          <p>{bio}</p>
          <p>{email}</p>
          <p>{phone}</p>
          <p>{location_id}</p>
          <p>{birthdate}</p>
        </div>
      )}
    </>
  );
}
