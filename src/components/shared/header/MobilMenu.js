import React from "react";

const scrollToRef = (ref) => {
  ref.current.scrollIntoView({ behavior: "smooth" });
};

const MobilMenu = () => {
  return (
    <nav
      className="z-50 fixed top-20 right-20 flex flex-col justify-center items-center gap-6 p-8 bg-#37B8A8 rounded-xl shadow-lg"
      style={{
        backgroundColor: "#37B8A8",
        borderRadius: "12px",
        color: "white",
        fontWeight: "bold",
      }}
    >
      <a>Servicios</a>
      <a>Accesorios</a>
      <a>Materiales</a>
      <a>Más Vendidos</a>
    </nav>
  );
};

export default MobilMenu;
