import React from "react";
import Post from "@/src/components/Publication/Post";

const Publication = {
  imgPost: "/image/img_Post.png",
  imgProfile: "/image/profile1.png",
  idUser: 2,
  nameUser: "Usuario que publica",
  titlePost: "Titulo del Articulo",
  likes: 5,
  description:
    "Lorem ipsum dolor sit amet consectetur. Vitae sagittis lectus at nulla. Phasellus suspendisse amet urna morbi quis facilisis cras accumsan. Justo ridiculus bibendum vulputate ac vestibulum cursus. Pulvinar aliquet pharetra nibh ut vulputate varius. Dignissim diam ultrices aliquam nunc erat habitasse faucibus ante mattis. Diam suspendisse in nisi egestas ",
  category: "Categoria",
  coments: [
    {
      id: 1,
      imgProfile: "/image/profileComent.png",
      nameUser: "Usuario que comenta",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vitae sagittis lectus at nulla. Phasellus suspendisse amet urna morbi quis facilisis cras accumsan. Justo ridiculus bibendum vulputate ac vestibulum cursus. Pulvinar aliquet pharetra nibh ut vulputate varius. Dignissim diam ultrices aliquam nunc erat habitasse faucibus ante mattis. Diam suspendisse in nisi egestas ",
    },
  ],
};

export default function Publications() {
  return (
    <main className="mt-[65px] grid justify-items-center lg:grid-cols-2">
      <Post post={Publication} />
    </main>
  );
}
