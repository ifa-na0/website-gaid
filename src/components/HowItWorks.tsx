"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import type { Variants } from "framer-motion";

const steps = [
  {
    id: "01 /",
    titleBold: "Encontrá",
    titleRest: " eventos, lugares y guías en Buenos Aires.",
    subtitle: "Filtrá por fecha y tipo.",
    color: "#F8D845",
    showArrow: true,
  },
  {
    id: "02 /",
    titleBold: "Guardá",
    titleRest: " planes y dejá tu opinión.",
    subtitle: "También podés ver lo que otros recomiendan en sus perfiles.",
    color: "#FF8B8B",
    showArrow: true,
  },
  {
    id: "03 /",
    titleBold: "Personaliza",
    titleRest: " tu experiencia con cada interacción.",
    subtitle: "Cada guardado, respost o follow ajusta tu feed.",
    color: "#7EC5EB",
    showArrow: false,
  },
];

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const v =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h;
  const n = parseInt(v, 16);
  const r = (n >> 16) & 255,
    g = (n >> 8) & 255,
    b = n & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function Blob({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 120 100"
      className="h-14 w-14"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M73.3 9.5c8.5 4.8 16.6 12.1 18.6 21.9 2 9.7-2.9 21.9-10 31.1-7.1 9.1-16.4 15.2-25.7 16.4-9.3 1.2-18.5-3-26.1-9.9S16.6 53 15.4 44.8c-1.3-8.3 1.4-16.7 6.1-23.3 4.8-6.6 11.6-11.4 19.4-13.3 7.8-1.9 16.7-.8 32.4 1.3z"
        fill={color}
      />
    </svg>
  );
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const listVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.14, delayChildren: 0.08 },
  },
};
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};
const mobileCardVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

function DesktopCard({ step }: { step: (typeof steps)[number] }) {
  const baseBg = hexToRgba(step.color, 0);
  const hoverBg = hexToRgba(step.color, 0.14);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const controls = useAnimation();
  useEffect(() => {
    controls.start(inView ? "show" : "hidden");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      animate={controls}
      initial="hidden"
      className="relative"
      style={{ width: 348, height: 417 }}
    >
      <motion.div
        className="relative h-full w-full rounded-[32px] border-[3px] border-[#1E1E1E] pt-5 pr-6 pb-6 pl-[30px]"
        style={{ boxShadow: "6px 8px 0 0 #1E1E1E", backgroundColor: baseBg }}
        whileHover={{ y: -4, backgroundColor: hoverBg }}
        transition={{
          duration: 0.25,
          backgroundColor: { duration: 0.25, ease: "easeOut" },
        }}
      >
        <div className="relative mt-[26px] flex items-center justify-between">
          <span className="font-satoshi text-[35px] font-medium leading-none text-neutral-900">
            {step.id}
          </span>
          <Blob color={step.color} />
        </div>
        <h3 className="mt-[32px] font-satoshi text-[28px] font-medium leading-[1.2] text-neutral-900">
          <span className="font-bold">{step.titleBold}</span>
          {step.titleRest}
        </h3>
        <p className="mt-[22px] font-satoshi text-[21px] font-normal leading-[1.35] text-[#878787]">
          {step.subtitle}
        </p>
        {step.showArrow && (
          <div className="absolute right-6 bottom-8">
            <ArrowRight className="h-7 w-7 text-neutral-800" />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

function MobileSlide({
  step,
  index,
  onPrev,
  onNext,
}: {
  step: (typeof steps)[number];
  index: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  const baseBg = hexToRgba(step.color, 0);
  return (
    <motion.div
      variants={mobileCardVariants}
      className="snap-center w-screen shrink-0 px-4"
    >
      <div className="flex justify-center">
        <div
          className="relative rounded-[32px] border-[3px] border-[#1E1E1E] bg-white pt-5 pr-6 pb-8 pl-[30px] select-none"
          style={{
            width: 348,
            height: 417,
            transform: "scale(0.92)",
            transformOrigin: "center top",
            boxShadow: "6px 8px 0 0 #1E1E1E",
            backgroundColor: baseBg,
          }}
        >
          <div className="relative mt-[26px] flex items-center justify-between">
            <span className="font-satoshi text-[35px] font-medium leading-none text-neutral-900">
              {step.id}
            </span>
            <Blob color={step.color} />
          </div>
          <h3 className="mt-[32px] font-satoshi text-[28px] font-medium leading-[1.2] text-neutral-900">
            <span className="font-bold">{step.titleBold}</span>
            {step.titleRest}
          </h3>
          <p className="mt-[22px] font-satoshi text-[21px] font-normal leading-[1.35] text-[#878787]">
            {step.subtitle}
          </p>
          <div className="absolute bottom-6 right-6 flex items-center gap-5">
            {index > 0 && (
              <ArrowLeft
                className="h-7 w-7 text-neutral-800 active:scale-95"
                onClick={onPrev}
                role="button"
                tabIndex={0}
              />
            )}
            {index < steps.length - 1 && (
              <ArrowRight
                className="h-7 w-7 text-neutral-800 active:scale-95"
                onClick={onNext}
                role="button"
                tabIndex={0}
              />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HowItWorksSection({
  className = "",
  id = "como-funciona",
}: {
  className?: string;
  id?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const sectionInView = useInView(sectionRef, { amount: 0.3 });
  const sectionControls = useAnimation();
  useEffect(() => {
    sectionControls.start(sectionInView ? "show" : "hidden");
  }, [sectionInView, sectionControls]);

  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollScreen = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({
      left: dir * window.innerWidth,
      behavior: "smooth",
    });
  };

  return (
    <motion.section
      id={id}
      ref={sectionRef}
      className={`relative w-full bg-white -mt-10 md:-mt-6 lg:-mt-8 ${className}`}
      variants={sectionVariants}
      initial="hidden"
      animate={sectionControls}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-2 md:pt-10 pb-0 md:pb-12">
        <div className="mx-auto -mt-6 mb-24 h-px w-11/12 max-w-[640px] rounded-full bg-neutral-200/80 md:hidden" />

        <motion.div variants={sectionVariants}>
          <h2 className="text-center font-satoshi text-[30px] font-bold text-neutral-900">
            ¿Cómo funciona?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center font-satoshi text-[18px] text-neutral-500">
            Descubrí en tres pasos cómo
            <br className="md:hidden" /> mejoramos tu experiencia.
          </p>
        </motion.div>

        <motion.div
          variants={listVariants}
          initial="hidden"
          animate="show"
          className="mt-16 hidden md:flex justify-center space-x-[45px]"
        >
          {steps.map((s) => (
            <DesktopCard key={s.id} step={s} />
          ))}
        </motion.div>

        <motion.div
          variants={listVariants}
          initial="hidden"
          animate="show"
          className="mt-6 md:hidden -mx-4"
        >
          <div
            ref={scrollerRef}
            className="no-scrollbar flex overflow-x-auto overflow-y-visible snap-x snap-mandatory pb-6"
            style={{ scrollSnapStop: "always" }}
          >
            {steps.map((s, i) => (
              <MobileSlide
                key={s.id}
                step={s}
                index={i}
                onPrev={() => scrollScreen(-1)}
                onNext={() => scrollScreen(1)}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </motion.section>
  );
}
