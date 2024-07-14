import React from "react";
import Image from "next/image";
import { AiTwotoneFire } from "react-icons/ai";
import Container from "../shared/Container";
import { useRouter } from "next/navigation";
import logo from "../../assets/home/logo.png";

const Banner1 = () => {
  const router = useRouter();

  return (
    <Container>
      <div
        className="bg-[#f8f0ea] h-full w-full rounded-primary relative flex flex-col gap-y-8 lg:p-24 pt-8  pb-0"
        style={{
          backgroundImage: "url(/assets/home/banner/dots.svg)",
          marginTop: "0",
        }}
      >
        <Image
          src={logo}
          alt="model"
          height={872}
          width={500}
          className="lg:absolute -top-11 right-0 order-2 lg:w-[500px] lg:ml-0 md:ml-auto"
        />
        <article className="flex flex-col justify-start items-end order-1 px-8">
          <div className="flex flex-col gap-y-4 max-w-lg z-20 mr-auto">
            <h1 className="md:text-6xl text-4xl">Lindo Accesorio.</h1>
            <p className="flex flex-row gap-x-0.5 items-center text-lg text-black">
              Encuentra los mejores accesorios hechos a mano.
              <AiTwotoneFire className="text-[#ffa384] w-6 h-6 drop-shadow" />
            </p>
            <button
              style={{ background: "#649e98" }}
              className="px-8 py-4  rounded-secondary  hover:bg-black/90 text-white transition-colors drop-shadow w-fit mt-4"
              onClick={() => router.push("https://wa.link/ue7yth")}
            >
              Contacto
            </button>
          </div>
        </article>
      </div>
    </Container>
  );
};

export default Banner1;
