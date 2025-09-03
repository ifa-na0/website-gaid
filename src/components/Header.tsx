import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-[#E5E7EB]">
      <div className="w-full px-6 py-5 flex items-center justify-between">
        <a href="/" className="inline-flex items-center">
          <Image
            src="/images/logogaid.svg"
            alt="Gaid"
            width={84}
            height={24}
            priority
          />
        </a>

        <a
          href="https://gaid.ar"
          className="
            inline-flex h-[40px] w-[130px] items-center justify-center
            rounded-full border border-black bg-white
            text-[14px] font-bold text-[#1E1E1E]
            shadow-[4px_4px_0_#111] 
            transition-[transform,box-shadow] duration-200
            hover:-translate-y-[1px] hover:shadow-[0_0_0_#111]
            focus:outline-none focus:ring-2 focus:ring-black/10
          "
        >
          Iniciar sesión
        </a>
      </div>
    </header>
  );
}
