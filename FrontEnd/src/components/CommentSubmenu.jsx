import React from "react";
import { CommentMenuIcon } from "./Icons/CommentMenuIcon";
import TrashIcon, { EditIcon } from "./Icons/EditIcon";

export default function CommentSubmenu({onDeleteComment}) {
  return (
    <div className="group relative">
      <div className="hover:cursor-pointer p-5 md:block">
        <CommentMenuIcon />
      </div>
      <div className="absolute bottom-0 right-0 hidden h-[82px] w-32 flex-col gap-2 rounded-xl border justify-between bg-white p-4 shadow-lg md:group-hover:flex">
        <button
          href={"/nuevopost"}
          className="flex gap-3 border-secondary-violet hover:border-b-2 items-center"
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
