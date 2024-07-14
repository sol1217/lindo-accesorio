"use client";

import React from "react";
import Container from "../shared/Container";
import Image from "next/image";
import bracelet from "../../assets/accesories/bracelet.jpeg";
import necklace from "../../assets/accesories/necklace.jpeg";
import earrings from "../../assets/accesories/earrings.jpeg";
import ribbon from "../../assets/accesories/ribbon.jpeg";
import clips from "../../assets/accesories/clips.jpeg";
import ring from "../../assets/accesories/rings.jpeg";

const ExpertChoice = () => {
  const accesorios = {
    bracelet: {
      title: "Pulseras",
      img: bracelet,
      href: "https://heyzine.com/flip-book/e7150ee358.html",
      descripcion:
        "Colección de pulseras artesanales elaboradas con materiales naturales. Desde piedras semipreciosas hasta maderas exóticas y conchas marinas.",
    },
    necklaces: {
      title: "Collares",
      img: necklace,
      href: "https://heyzine.com/flip-book/b0a38763db.html",
      descripcion:
        "Explora nuestra colección de collares diseñados con pasión y atención al detalle. Cada pieza está hecha para destacar.",
    },
    rings: {
      title: "Anillos",
      img: ring,
      href: "https://heyzine.com/flip-book/c104107b6c.html",
      descripcion:
        "Descubre nuestros anillos únicos y elegantes. Diseñados para complementar cualquier ocasión, ya sea formal o casual.",
    },
    clips: {
      title: "Prensas",
      img: clips,
      href: "https://heyzine.com/flip-book/7b07a7a4a4.html",
      descripcion:
        "nuestras prensas bonitas añaden un detalle especial y único a cada pieza",
    },
    ribbon: {
      title: "Lazos",
      img: ribbon,
      href: "https://heyzine.com/flip-book/b4bc4126a9.html",
      descripcion:
        "Nuestros lazos son perfectos para cualquier estilo y ocasión, confeccionados con telas elegantes y estampados encantadores.",
    },
    earrings: {
      title: "Aretes",
      img: earrings,
      href: "https://heyzine.com/flip-book/8accd73ce4.html",
      descripcion:
        "Cada pieza está hecha para destacar, ya sea con piedras preciosas, metales elegantes o combinaciones creativas de materiales.",
    },
  };

  const accesoriosArray = Object.values(accesorios);

  return (
    <Container className={"flex gap-10 flex-col "}>
      <h1 className="text-4xl">
        Todos Nuestros. <span className="">Accesorios</span>
      </h1>
      <section className="flex  flex-wrap flex-row justify-center items-center gap-3.5">
        {accesoriosArray.map((accesorio, index) => (
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
              height={200}
            />
            <h2 className="mt-4 text-3xl">{accesorio.title}</h2>
            <p className="mt-2 text-center">{accesorio.descripcion}</p>
            <a
              href={accesorio.href}
              style={{ background: "#649e98", color: "white" }}
              className="mt-2 p-3 rounded-xl hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50"
            >
              Ver catálogo
            </a>
          </div>
        ))}
      </section>
    </Container>
  );
};

export default ExpertChoice;
