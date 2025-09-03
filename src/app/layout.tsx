import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const satoshi = localFont({
  src: [
    {
      path: "../fonts/satoshi/Satoshi-Variable.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../fonts/satoshi/Satoshi-VariableItalic.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata = {
  title: "Gaid",
  description: "Planes y eventos en Buenos Aires",
  icons: {
    icon: "/favicon.svg", // 👉 apunta a tu archivo en /public
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full">
      <body
        className={`${satoshi.variable} font-sans min-h-full bg-white text-[#171717]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
