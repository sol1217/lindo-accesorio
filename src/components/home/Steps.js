import Image from "next/image";
import React from "react";
import Container from "../shared/Container";

const Steps = () => {
  const steps = [
   
    {
      badge: (
        <span className="inline-flex px-2.5 py-1 rounded-secondary text-xs text-purple-800 bg-purple-100 relative">
          Disfruta
        </span>
      ),
      title: "Recibe tu Pulsera",
      description: "Recibe tu pulsera rápidamente y disfrútala al máximo.",
      thumbnail: "/assets/home/steps/accesories.png",
    },
    {
      badge: (
        <span className="inline-flex px-2.5 py-1 rounded-secondary text-xs text-red-800 bg-red-100 relative">
          Personalizadas
        </span>
      ),
      title: "Explora Diseños",
      description: "Descubre una amplia variedad de diseños de pulseras únicas y personalizables.",
      thumbnail: "/assets/home/steps/delivery.png",
    },
    {
      badge: (
        <span className="inline-flex px-2.5 py-1 rounded-secondary text-xs text-yellow-800 bg-yellow-100 relative">
          Entregas
        </span>
      ),
      title: "Realiza tu Pedido",
      description: "Haz tu pedido fácilmente y personaliza cada detalle de tu pulsera.",
      thumbnail: "/assets/home/steps/logistics-delivery.png",
    },
    {
      badge: (
        <span className="inline-flex px-2.5 py-1 rounded-secondary text-xs text-indigo-800 bg-indigo-100 relative">
          x Mayor
        </span>
      ),
      title: "Selecciona Accesorios",
      description: "Elige entre una variedad de pulsera para tu negocio.",
      thumbnail: "/assets/home/steps/sells.png",
    },
  ];

  return (
    <Container className="flex gap-9 flex-col">
      <h1 className="text-4xl">
        Servicios. <span className="">Ofrecemos</span>
      </h1>
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16 xl:gap-20">
        <picture className="hidden md:block absolute inset-x-0 top-5">
          <source srcSet="/assets/home/steps/step-bg.svg" type="image/svg" />
          <img src="/assets/home/steps/step-bg.svg" alt="vector" />
        </picture>
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col gap-y-8 items-center max-w-xs mx-auto"
          >
            <div className="max-w-[100px] mx-auto">
              <Image
                src={step.thumbnail}
                alt={step.title}
                height={100}
                width={100}
                className="w-[100px] h-[100px] object-contain"
              />
            </div>
            <div className="flex flex-col gap-y-4 items-center justify-center">
              {step.badge}
              <h2 className="text-base">{step.title}</h2>
              <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6 text-center">
                {step.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Steps;
