import React from "react";
import Container from "../shared/Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import lazo from "../../../public/assets/home/lazo-img.jpeg";

const Banner3 = () => {
  const router = useRouter();

  return (
    <Container className="m-9">
      <div
        className="m-9 bg-gray-50 h-full w-full rounded-primary relative flex flex-col gap-y-8 lg:p-24 p-8"
        style={{ backgroundImage: "url(/assets/home/banner/dots.svg)" }}
      >
        <Image
          src={lazo}
          alt="model"
          height={702}
          width={600}
          className="lg:absolute bottom-0 right-0 order-2 rounded-full"
        />
        <article className="flex flex-col justify-start items-end order-1">
          <div className="flex flex-col gap-y-4 max-w-lg z-50 lg:mr-auto lg:mr-0 mr-auto">
            <h1 className="md:text-6xl text-4xl">Siempre unica y natural</h1>
            <p className="flex flex-row gap-x-0.5 items-center text-lg text-slate-500">
              Visita nuestras redes sociales para poder ver las nuevas
              novedades.
            </p>
            <button
              style={{ background: "#649e98" }}
              className="px-8 py-4 rounded-secondary hover:bg-black/90 text-white transition-colors drop-shadow w-fit mt-4"
              onClick={() =>
                router.push(
                  "https://www.facebook.com/profile.php?id=61555633467321&mibextid=LQQJ4d",
                )
              }
            >
              Facebook
            </button>
          </div>
        </article>
      </div>
    </Container>
  );
};

export default Banner3;
