import Coment from "@/src/components/Coment";

export default function Coments({ coments }) {
  return (
    <div>
      {coments?.map((coment) => (
        <Coment key={coment.id} coment={coment} />
      ))}
    </div>
  );
}
