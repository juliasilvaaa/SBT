// Componente Header
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center bg-black text-white px-4 py-4 md:px-8 justify-center">
      <div className="">
        {/* Direcionando para a tela inicial */}
        <Link href="/">
          <img
            className="w-10 sm:w-12 md:w-14 lg:w-16"
            src="/img/logo.png" 
            alt="Logo-SBT"
          />
        </Link>
      </div>
    </header>
  );
}
