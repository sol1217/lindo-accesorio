"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();
  const year = new Date().getFullYear();

  const sitemaps = [
    {
      name: "Lista Productos",
      paths: [
        {
          name: "Pulseras Naturales",
          path: "/",
        },
        {
          name: "Collares y Tobilleras",
          path: "/",
        },
        {
          name: "Pulseras abalorio",
          path: "/",
        },
        {
          name: "Aretes y Anillos",
          path: "/",
        },
        {
          name: "Lazos y prensas",
          path: "/",
        },
      ],
    },
    
    {
      name: "Información",
      paths: [
        {
          name: "Costa Rica, Cartago",
          path: "/",
        },
        {
          name: "(506) 6043-0566",
          path: "/",
        },
        {
          name: "Tienda Virtual",
          path: "/",
        },
        {
          name: "By: Cecilia Romero",
          path: "/",
        },
      ],
    },
    {
      name: "Redes Sociales",
      paths: [
        {
          name: "Facebook",
          path: "https://www.facebook.com/profile.php?id=61555633467321&mibextid=LQQJ4d",
        },
        {
          name: "Instagram",
          path: "https://www.instagram.com/lindo_accesorio_?igsh=eXRoYWRkY2wwNXI2",
        },
        {
          name: "Tik Tok",
          path: "https://www.tiktok.com/@lindo_accesorio_",
        },
      ],
    },
  ];

  return (
    <footer className="footer-1 bg-gray-100 py-8 sm:py-12 m-6 p-6 rounded-xl">
      <div className="container mx-auto px-4 flex flex-col gap-y-10">
        <div className="flex md:flex-row md:flex-wrap md:justify-evenly flex-col gap-x-4 gap-y-8">
          {sitemaps?.map((sitemap, index) => (
            <div key={index} className="flex flex-col gap-y-3">
              <h2 className="text-2xl">{sitemap.name}</h2>
              <div className="flex flex-col gap-y-1.5">
                {sitemap?.paths?.map((path, index) => (
                  <Link key={index} href={path?.path} className="text-base">
                    {path?.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <hr />
        <p className="text-center">&copy; {year} Desarrollador: Sol Calderón Romero.</p>
      </div>
    </footer>
  );
};

export default Footer;
