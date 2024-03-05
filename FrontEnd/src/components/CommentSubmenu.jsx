import React from "react";
import { CommentMenuIcon } from "./Icons/CommentMenuIcon";
import TrashIcon, { EditIcon } from "./Icons/EditIcon";

export default function CommentSubmenu({
  onDeleteComment,
  setIsEdit,
  coment,
  setCommentEdit,
}) {
  return (
    <div className="group relative">
      <div className="p-5 hover:cursor-pointer">
        <CommentMenuIcon />
      </div>
      <div className="absolute -bottom-14 right-2 hidden h-[82px] w-32 flex-col justify-between gap-2 rounded-xl border bg-white p-4 shadow-lg group-hover:flex">
        <button
          onClick={() => {
            setIsEdit(true);
            setCommentEdit(coment);
          }}
          className="flex items-center gap-3 border-secondary-violet hover:border-b-2"
        >
          <EditIcon />
          <span>Editar</span>
        </button>
        <button
          href={""}
          className="flex gap-3 border-secondary-violet hover:border-b-2"
          onClick={onDeleteComment}
        >
          <TrashIcon />
          <span>Eliminar</span>
        </button>
      </div>
    </div>
  );
}
