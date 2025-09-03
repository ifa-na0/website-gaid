"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Container from "./Container";

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [animTick, setAnimTick] = useState(0);

  useEffect(() => {
    try {
      const already = sessionStorage.getItem("heroDidAnim");
      if (!already) {
        requestAnimationFrame(() => setAnimTick((t) => t + 1));
        sessionStorage.setItem("heroDidAnim", "1");
      }
    } catch {}
  }, []);

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative flex min-h-[100dvh] items-center bg-white pt-[16px] md:pt-0"
    >
      <Container>
        <div
          className="
            mx-auto grid items-center justify-center overflow-visible
            mt-0 md:-mt-20
            gap-4 md:gap-20
            md:grid-cols-[380px_minmax(0,580px)] max-w-[1200px]
          "
        >
          <div className="order-2 md:order-1 self-start md:self-center flex justify-center overflow-visible -mt-2 md:mt-0">
            <div className="relative overflow-visible scale-[0.9] sm:scale-95 md:scale-100">
              <Image
                src="/images/gaidfeed4.png"
                alt="GAID app preview"
                width={500}
                height={1000}
                priority
                className="
                  select-none md:drop-shadow-2xl h-auto
                  w-[220px] sm:w-[260px]
                  md:w-[330px] lg:w-[400px] xl:w-[330px]
                "
              />

              <span
                className="
                  absolute z-20 top-[22%] right-0 -mr-10 md:-mr-4
                  flex items-center justify-center rounded-full
                  h-[38px] px-3 text-[14px] shadow-md
                  md:h-[48px] md:px-5 md:text-[16px] md:shadow-lg
                  bg-white/70 backdrop-blur-md border border-black/15
                  anim-pill
                "
                style={{ animationDelay: "140ms" }}
              >
                <span className="mr-1.5 md:mr-2">🎭</span> Teatro
              </span>

              <span
                className="
                  absolute z-20 top-[70%] left-0 -ml-10 md:-ml-6
                  flex items-center justify-center rounded-full
                  h-[38px] px-3 text-[14px] shadow-md
                  md:h-[48px] md:px-5 md:text-[16px] md:shadow-lg
                  bg-white/70 backdrop-blur-md border border-black/15
                  anim-pill
                "
                style={{ animationDelay: "260ms" }}
              >
                <span className="mr-1.5 md:mr-2">🥐</span> Comida
              </span>

              <span
                className="
                  absolute z-20 top-[76%] right-0 -mr-10 md:-mr-6
                  flex items-center justify-center rounded-full
                  h-[38px] px-3 text-[14px] shadow-md
                  md:h-[48px] md:px-5 md:text-[16px] md:shadow-lg
                  bg-white/70 backdrop-blur-md border border-black/15
                  anim-pill
                "
                style={{ animationDelay: "360ms" }}
              >
                <span className="mr-1.5 md:mr-2">🗓️</span> Más eventos
              </span>
            </div>
          </div>

          <div className="order-1 md:order-2 text-center md:text-left self-start md:self-center">
            <div key={`title-${animTick}`}>
              <h1
                className="
                  text-[#1E1E1E] font-bold
                  text-[30px] leading-[36px]
                  md:text-[50px] md:leading-[56px]
                  anim-fade-block
                "
                style={{ animationDelay: "80ms" }}
              >
                ¿Qué hacer hoy en
                <br />
                Buenos Aires?
              </h1>
            </div>

            <div key={`subtitle-${animTick}`}>
              <p
                className="
                  mt-3 md:mt-4 max-w-[28rem] md:max-w-xl
                  mx-auto md:mx-0
                  text-[#4B5563]
                  text-[16px] md:text-[16px]
                  leading-[24px] md:leading-[27px] font-normal
                "
              >
                <span className="md:hidden">
                  <span
                    className="line-reveal inline-block"
                    style={{ animationDelay: "280ms" }}
                  >
                    Buscá, guardá y compartí planes, lugares y eventos. Todo en
                    un mismo lugar.
                  </span>
                </span>

                <span className="hidden md:inline">
                  <span className="line-wrap">
                    <span
                      className="line-reveal"
                      style={{ animationDelay: "280ms" }}
                    >
                      Buscá, guardá y compartí planes, lugares y eventos
                    </span>
                  </span>
                  <span className="line-wrap">
                    <span
                      className="line-reveal"
                      style={{ animationDelay: "420ms" }}
                    >
                      Todo en un mismo lugar.
                    </span>
                  </span>
                </span>
              </p>
            </div>

            <div key={`cta-${animTick}`}>
              <a
                href="https://gaid.ar"
                aria-label="Ir a Gaid"
                className="
                  mt-6 md:mt-8 inline-flex h-[46px] md:h-[50px] w-[170px] md:w-[179px]
                  items-center justify-center rounded-full bg-[#1E1E1E] text-white
                  text-[15px] md:text-[16px] font-bold transition-colors duration-200
                  border-2 border-transparent hover:bg-white hover:text-[#1E1E1E] hover:border-[#1E1E1E]
                  focus:outline-none focus:ring-2 focus:ring-black/10 anim-fade-block
                "
                style={{ animationDelay: "560ms" }}
              >
                Ir a Gaid
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* (Quitamos la línea del Hero) */}

      <a
        href="#como-funciona"
        aria-label="Bajar a siguiente sección"
        className="hidden md:flex absolute inset-x-0 bottom-24 justify-center animate-bounce"
      >
        <span className="text-2xl">↓</span>
      </a>
    </section>
  );
}
