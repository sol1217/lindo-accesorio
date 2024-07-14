"use client";

import React from "react";
import Container from "../shared/Container";
import Image from "next/image";
import bracelet from "../../assets/accesories/bracelet-2.jpeg";
import clips from "../../assets/accesories/clip-2.jpeg";
import ribbon from "../../assets/accesories/riibon-2.jpeg";
import earrings from "../../assets/accesories/earings-2.jpeg";
import earringTwo from "../../assets/accesories/earrings-3.jpeg";
import braceletAbalorio from "../../assets/accesories/bracelet-abalorio.jpeg";

const Trending = () => {
  const accesorios = {
    bracelet: {
      title: "Piedras Naturales",
      img: bracelet,
      tag1: "Pulsera",
      tag2: "Naturales",
    },
    ribbon: {
      title: "Lazos Personalizados",
      img: ribbon,
      tag1: "Dijes",
      tag2: "Lazos",
    },

    earrings: {
      title: "Aretes",
      img: earrings,
      tag1: "Pendientes",
      tag2: "Personalizado",
    },
    necklaces: {
      title: "Collares",
      img: earringTwo,
      tag1: "Detalle",
      tag2: "Diseños",
    },
    clips: {
      title: "Prensas con flores",
      img: clips,
      tag1: "Flores",
      tag2: "Prensas",
    },
    rings: {
      title: "Pulseras con abalorio",
      img: braceletAbalorio,
      tag1: "Abalorio",
      tag2: "Pulseras",
    },
  };

  const accesoriosList = Object.values(accesorios);

  return (
    <Container className="flex flex-col justify-around items-start gap-10 p-8">
      <h1 className="text-4xl">
        Accesorios mas. <span className="">Vendidos</span>
      </h1>
      <section className="flex  flex-wrap flex-row justify-center items-center gap-3">
        {accesoriosList.map((accesorio, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center border border-gray-300 p-5 rounded-xl hover:border-black hover:shadow-lg transform hover:scale-102 transition duration-300 ease-in-out"
            style={{ width: "400px", height: "550px" }}
          >
            <Image
              className="rounded-xl"
              src={accesorio.img}
              alt="image-product"
              width={300}
            />
            <h2 className="mt-4 text-3xl">{accesorio.title}</h2>
            <p className="mt-2 text-center"></p>
            <div className="flex flex-row gap-2.5">
              <p
                style={{ background: "#649e98", color: "white" }}
                className="mt-2 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50"
              >
                #{accesorio.tag1}
              </p>
              <p className="mt-2 p-3 rounded-xl bg-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50">
                #{accesorio.tag2}
              </p>
            </div>
          </div>
        ))}
      </section>
    </Container>
  );
};

export default Trending;
