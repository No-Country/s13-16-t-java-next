import Coment from "@/src/components/Coment";

export default function Coments({ coments, setIsEdit, setCommentEdit }) {
  return (
    <div className="max-h-60 overflow-y-auto">
      {coments?.map((coment) => {
        const { id } = coment;
        return (
          <Coment
            key={id}
            coment={coment}
            setIsEdit={setIsEdit}
            setCommentEdit={setCommentEdit}
          />
        );
      })}
    </div>
  );
}
