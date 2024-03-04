import Coment from "@/src/components/Coment";

export default async function Coments({ coments, profileId }) {
  
  return (
    <div className="max-h-60 overflow-y-auto">
      {coments?.map((coment) => {
        const { id } = coment;
        return <Coment key={id} coment={coment} profileId={profileId} />;
      })}
    </div>
  );
}
