import React from "react";
import Container from "../shared/Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import clip from "../../../public/assets/home/clip-img.jpeg";

const Banner2 = ({ className }) => {
  const router = useRouter();

  return (
    <section className="mt-20">
      <Container className={className ? className : ""}>
        <div
          className="bg-yellow-50 h-full w-full rounded-primary relative flex flex-col gap-y-8 lg:p-24 p-8"
          style={{ backgroundImage: "url(/assets/home/banner/dots.svg)" }}
        >
          <Image
            src={clip}
            alt="model"
            height={872}
            width={600}
            className="lg:absolute bottom-0 left-0 order-2 rounded-full"
          />
          <article className="flex flex-col justify-start items-end order-1">
            <div className="flex flex-col gap-y-4 max-w-lg z-50 lg:ml-auto lg:mr-0 mr-auto">
              <h1 className="md:text-6xl text-4xl">
                Descubre los accesorios disponibles
              </h1>
              <p className="flex flex-row gap-x-0.5 items-center text-lg text-slate-500">
                Luce siempre bonita y unica con los accesorios personalizados y
                hechos 100% a mano de lindo accesorio
              </p>
              <button
                style={{ background: "#649e98", borderRadius: "30px" }}
                className="px-8 py-4 rounded-secondaryhover:bg-black/90 text-white transition-colors drop-shadow w-fit mt-4"
                onClick={() =>
                  router.push(
                    "https://www.instagram.com/lindo_accesorio_?igsh=eXRoYWRkY2wwNXI2",
                  )
                }
              >
                Instagram
              </button>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Banner2;
