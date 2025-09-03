import { Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] px-6 md:px-12 py-4 flex flex-col md:flex-row items-center justify-between bg-white">
      <div className="flex items-center space-x-2 text-[#374151] w-full md:w-auto justify-between md:justify-start">
        <a
          href="https://gaid.ar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm md:text-[14px] font-normal hover:underline"
        >
          GET GAID
        </a>

        <div className="flex items-center space-x-4 md:hidden">
          <a
            href="https://www.instagram.com/getgaid/"
            aria-label="Instagram"
            target="_blank"
          >
            <Instagram className="w-5 h-5 text-[#374151]" strokeWidth={1} />
          </a>
          <a href="https://x.com/getgaid" aria-label="Twitter" target="_blank">
            <Twitter className="w-5 h-5 text-[#374151]" strokeWidth={1} />
          </a>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-4 text-[#374151] text-sm md:text-[14px] font-normal mt-2 md:mt-0">
        <a href="#" className="hover:underline">
          Waitlist
        </a>
        <span className="text-lg leading-none">·</span>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <span className="text-lg leading-none">·</span>
        <a href="#" className="hover:underline">
          Terms & Services
        </a>
      </div>

      <div className="hidden md:flex items-center space-x-4 mt-2 md:mt-0">
        <a
          href="https://www.instagram.com/getgaid"
          aria-label="Instagram"
          target="_blank"
        >
          <Instagram className="w-5 h-5 text-[#374151]" strokeWidth={1} />
        </a>
        <a href="https://x.com/getgaid" aria-label="Twitter" target="_blank">
          <Twitter className="w-5 h-5 text-[#374151]" strokeWidth={1} />
        </a>
      </div>
    </footer>
  );
}
