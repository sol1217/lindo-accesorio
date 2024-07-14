"use client";

import React, { useState } from "react";
import Container from "../shared/Container";
import Brand from "../icons/Brand";
import Category from "../icons/Category";
import Store from "../icons/Store";
import Image from "next/image";
import { BsBoxSeam } from "react-icons/bs";
import onix from "../../assets/materials/onix.webp";
import pearls from "../../assets/materials/pearls.webp";
import volcanoStone from "../../assets/materials/volcano-stone.webp";
import cristales from "../../assets/materials/cristales.webp";
import agata from "../../assets/materials/agata.webp";
import cuarzo from "../../assets/materials/cuarzo.webp";
import jade from "../../assets/materials/jade.webp";
import wods from "../../assets/materials/wods.webp";
import granate from "../../assets/materials/granate.webp";
import eyeTigger from "../../assets/materials/eye-tigger.webp";
import amatista from "../../assets/materials/Amatista.webp";
import concha from "../../assets/materials/concha.webp";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { RiTiktokLine } from "react-icons/ri";

const NicheExplorer = () => {
  const niches = [
    {
      title: "Naturales",
      icon: <Store />,
    },
    {
      title: "Materiales",
      icon: <Category />,
    },
    {
      title: "Contacto",
      icon: <Brand />,
    },
  ];

  const [selectedNiche, setSelectedNiche] = useState("Category");

  return (
    <Container>
      <section className="flex flex-col gap-y-10">
        <h1 className="text-4xl">
          Materiales. <span className="">Naturales</span>
        </h1>

        <div className="bg-neutral-100/70 rounded-primary lg:p-24 md:p-12 p-6 flex flex-col gap-y-12">
          <div className="flex flex-row justify-center gap-x-4 overflow-x-auto">
            <div className="flex flex-row justify-center gap-x-4 border p-1 rounded-secondary bg-white overflow-x-auto scrollbar-hide">
              {niches.map((niche, index) => (
                <button
                  key={index}
                  className={
                    "text-sm text-black flex flex-row items-center gap-x-1 px-8 py-2 rounded-secondary border border-transparent" +
                    " " +
                    (selectedNiche === niche.title ? "bg-black text-white" : "")
                  }
                  onClick={() => setSelectedNiche(niche.title)}
                >
                  {niche.icon}
                  {niche.title}
                </button>
              ))}
            </div>
          </div>
          {selectedNiche === "Materiales" && <DisplayCategories />}
          {selectedNiche === "Naturales" && <DisplayMaterials />}
          {selectedNiche === "Contacto" && <DisplayStores />}
        </div>
      </section>
    </Container>
  );
};

function DisplayMaterials() {
  const materiales = [
    {
      title: "Cristales",
      icon: cristales,
      descripcion:
        "Las pulseras de cristales son conocidas por sus propiedades energéticas y estéticas. Ideales para equilibrar el cuerpo y la mente, se utilizan tanto para la meditación como para complementos de moda.",
      tags: "Naturales",
    },
    {
      title: "Piedra Volcanica",
      icon: volcanoStone,
      descripcion:
        "Las pulseras de piedra volcánica ofrecen una conexión a la tierra y son conocidas por sus propiedades de absorción de aceites esenciales. Perfectas para aquellos que buscan un accesorio con beneficios aromaterapéuticos.",
      tags: "Naturales",
    },
    {
      title: "Cuarzos",
      icon: cuarzo,
      descripcion:
        "El cuarzo es un mineral versátil usado en joyería y prácticas espirituales. Apreciado por sus capacidades de amplificación energética, es un componente esencial en muchas terapias holísticas.",
      tags: "Minerales",
    },
    {
      title: "Onix",
      icon: onix,
      descripcion:
        "El ónix es una piedra protectora que se cree que ayuda a liberar emociones negativas y fomentar la fuerza interior. Utilizado en joyería para su apariencia elegante y sus propiedades calmantes.",
      tags: "Minerales",
    },
    {
      title: "Perlas",
      icon: pearls,
      descripcion:
        "Las perlas son gemas orgánicas que simbolizan la pureza y la sabiduría adquirida a través de la experiencia. Valorizadas por su belleza natural, son un complemento clásico y elegante en cualquier colección de joyería.",
      tags: "Orgánicas",
    },
    {
      title: "Agata",
      icon: agata,
      descripcion:
        "Las perlas son gemas orgánicas que simbolizan la pureza y la sabiduría adquirida a través de la experiencia. Valorizadas por su belleza natural, son un complemento clásico y elegante en cualquier colección de joyería.",
      tags: "Orgánicas",
    },
  ];

  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {materiales.map((category, index) => (
          <div
            key={index}
            className="group border p-4 rounded-lg flex flex-col gap-y-4 hover:border-black transition-colors bg-white relative cursor-pointer"
          >
            <Image
              src={category.icon}
              alt=""
              width={50}
              height={50}
              className="rounded h-[50px] w-[50px] object-cover"
            />

            <div className="flex flex-col gap-y-2">
              <h2 className="text-xl">{category.title}</h2>
              <p className="flex flex-row gap-x-1 items-center rounded-primary">
                <BsBoxSeam />
                <span className="group-hover:text-indigo-500 text-xs">
                  {category.descripcion}
                </span>
              </p>
            </div>

            <p className="flex flex-row gap-1 overflow-x-auto scrollbar-hide">
              <span
                key={index}
                className="border text-xs px-1 py-0.5 rounded whitespace-nowrap"
              >
                {category.tags}
              </span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

function DisplayCategories() {
  const materialesTwo = [
    {
      title: "Jade",
      icon: jade,
      descripcion:
        "El jade es una piedra preciosa que se utiliza a menudo para la protección y la suerte. Es conocida por sus propiedades calmantes y equilibrantes, siendo ideal para atraer armonía y estabilidad.",
      tags: "Protección",
    },
    {
      title: "Ojo de Tigre",
      icon: eyeTigger,
      descripcion:
        "El ojo de tigre es una piedra protectora que ayuda a centrar y equilibrar las energías. Es conocida por sus propiedades para aumentar la confianza y proteger contra la negatividad.",
      tags: "Confianza",
    },
    {
      title: "Granate",
      icon: granate,
      descripcion:
        "El granate es una piedra energizante y regenerativa. Es utilizada para revitalizar, purificar y equilibrar la energía, aportando serenidad o pasión según las necesidades del usuario.",
      tags: "Serenidad",
    },
    {
      title: "Material de Madera",
      icon: wods,
      descripcion:
        "Los materiales de madera en la joyería ofrecen una conexión natural y terrenal. Son ligeros y versátiles, proporcionando una estética orgánica y rústica a los accesorios.",
      tags: "Terrenal",
    },
    {
      title: "Conchas",
      icon: concha,
      descripcion:
        "Las conchas marinas son elementos orgánicos utilizados en joyería por su belleza y simbolismo de protección y fertilidad. Añaden un toque de naturalidad y serenidad a cualquier pieza.",
      tags: "Naturalidad",
    },
    {
      title: "Amatista",
      icon: amatista,
      descripcion:
        "La amatista es una piedra poderosa y protectora, conocida por su capacidad para calmar la mente y ayudar en la meditación. Es utilizada para aliviar el estrés y equilibrar las energías.",
      tags: "Meditación",
    },
  ];

  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {materialesTwo.map((category, index) => (
          <div
            key={index}
            className="group border p-4 rounded-lg flex flex-col gap-y-4 hover:border-black transition-colors bg-white relative cursor-pointer"
          >
            <Image
              src={category.icon}
              alt=""
              width={50}
              height={50}
              className="rounded h-[50px] w-[50px] object-cover"
            />

            <div className="flex flex-col gap-y-2">
              <h2 className="text-xl">{category.title}</h2>
              <p className="flex flex-row gap-x-1 items-center rounded-primary">
                <BsBoxSeam />
                <span className="group-hover:text-indigo-500 text-xs">
                  {category.descripcion}
                </span>
              </p>
            </div>

            <p className="flex flex-row gap-1 overflow-x-auto scrollbar-hide">
              <span
                key={index}
                className="border text-xs px-1 py-0.5 rounded whitespace-nowrap"
              >
                {category.tags}
              </span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

function DisplayStores() {
  return (
    <>
      <div className="flex flex-row gap-5 justify-center items-center">
        <a href="https://www.instagram.com/lindo_accesorio_?igsh=eXRoYWRkY2wwNXI2">
          <FaInstagramSquare fontSize={70} />
        </a>
        <a>
          <FaSquareWhatsapp fontSize={70} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61555633467321&mibextid=LQQJ4d">
          <FaFacebookSquare fontSize={70} />
        </a>
        <a href="https://www.tiktok.com/@lindo_accesorio_">
          <RiTiktokLine fontSize={70} />
        </a>
      </div>
    </>
  );
}

export default NicheExplorer;
