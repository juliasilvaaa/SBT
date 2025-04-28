//  Componente Header
import Link from "next/link";

export function Header(){
    return(
        <header className="flex bg-black text-white align-center justify-center px-2 py-4">

            <div className="align-center justify-center flex">
                <img className="w-12" src="../img/logo.png" alt="Logo-SBT" />
            </div>
          
        </header>
    )
}