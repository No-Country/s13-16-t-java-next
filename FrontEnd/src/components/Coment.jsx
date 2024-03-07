"use client";

import { date as tzDate, format } from "@formkit/tempo";
import Image from "next/image";
import CommentSubmenu from "./CommentSubmenu";
import { toast } from "sonner";
import { useGetProfile } from "../hooks/useGetProfile";
import { realDateTimeDiff } from "../utils/functions";

export default function Coment({ coment, setIsEdit, setCommentEdit }) {
  const { description, date: dateTime } = coment;

  const profileId =
    typeof window !== "undefined" && localStorage.getItem("profileId");

  const { profile } = useGetProfile(coment.profileId);

  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const DATE = tzDate(`${dateTime}Z`, userTimeZone);

  const dateLongFormated = format(DATE, "h:mm A · MMMM D, YYYY");

  const endDate = new Date();
  const dateShortFormated = realDateTimeDiff(DATE, endDate);

  async function handleDeleteComment() {
    try {
      const response = await fetch(
        `https://deployreciclame-production.up.railway.app/comments/delete/${coment.id}`,
        {
          method: "DELETE",
        },
      );
      const data = await response.json();
      if (data) {
        toast.success("Comentario eliminado con exito");
      }
    } catch (error) {
      toast.error("Error al eliminar el comentario");
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3 p-3">
        <div className="flex items-center gap-2">
          {profile?.photoId &&
            profile?.userResponseDTO.name &&
            profile?.userResponseDTO.lastName && (
            <>
              <Image
                src={
                  profile.photoId ? profile.photoId : "/image/profile1.png"
                }
                alt={`Imagen de usuario ${profile.userResponseDTO.name}`}
                height={50}
                width={50}
                className=" max-h-[50px] max-w-[50px] rounded-full object-cover object-center"
              />
              <div className="flex flex-col">
                <p>
                  {profile?.userResponseDTO.name
                    ? profile.userResponseDTO.name +
                      " " +
                      profile.userResponseDTO.lastName
                    : "usuario"}
                </p>
                <span
                  className=" text-[12px] text-gray-400"
                  dateTime={DATE}
                  title={dateLongFormated}
                >
                  {dateShortFormated}
                </span>
              </div>
            </>
          )}
        </div>
        {profileId === coment.profileId && (
          <CommentSubmenu
            onDeleteComment={handleDeleteComment}
            setIsEdit={setIsEdit}
            coment={coment}
            setCommentEdit={setCommentEdit}
          />
        )}
      </div>
      <p className="mb-2 text-justify text-sm">{description}</p>
    </div>
  );
}
