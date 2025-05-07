import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/header";
import { Categories } from "./components/categories";



export const metadata: Metadata = {
  title: "SBT",
  description: "Projeto para desenvolver e aprender Typescript e Next.js",
  icons: {
    icon: '/img/logo.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialised`}>
        <Header />
        <div className="pt-4">
          <Categories />
        </div>

        {/* Conteúdos */}
        {children}


      </body>
    </html>
  );
}
