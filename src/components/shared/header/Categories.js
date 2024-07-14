"use client";

import React from "react";

const Categories = () => {
  /*const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
*/
  return (
    <div className="flex flex-row gap-5">
      <a>Servicios</a>
      <a>Accesorios</a>
      <a>Materiales</a>
      <a>Más Vendidos</a>
    </div>
  );
};

export default Categories;
