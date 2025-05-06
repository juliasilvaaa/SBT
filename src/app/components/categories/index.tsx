// Componente categorias 
import Link from "next/link";

export function Categories(){
    return(
        <header className="flex text-white px-2 py-4 align-center justify-center">

            <div className="flex gap-4 items-center justify-center">
                
                {/* Categorias */}
                <div className="cursor-pointer hover:bg-black bg-[var(--categorie1)] rounded-xl font-bold text-white flex align-center justify-center w-30 ">
                    <Link href='/info'>
                       <h1>SBT</h1>
                    </Link>
                 
                </div>

                <div className="cursor-pointer hover:bg-black  bg-[var(--categorie2)] rounded-xl font-bold text-white flex align-center justify-center w-30">
                    <Link href='/programas'>
                      <h1>Programas</h1>
                    </Link>
                  
                </div>

                <div className="cursor-pointer hover:bg-black  bg-[var(--categorie3)] rounded-xl font-bold text-white flex align-center justify-center w-30">
                    <h1>Artistas</h1>
                </div>

                <div className="cursor-pointer hover:bg-black  bg-[var(--categorie4)] rounded-xl font-bold text-white flex align-center justify-center w-30">
                    <h1>Notícias</h1>
                </div>

                <div className="cursor-pointer hover:bg-black  bg-[var(--categorie5)] rounded-xl font-bold text-white flex align-center justify-center w-30">
                    <Link href='/programacao'>
                    <h1>Programação</h1>
                    </Link>
                    
                </div>

                <div className="cursor-pointer hover:bg-black  bg-[var(--categorie6)] rounded-xl font-bold text-white flex align-center justify-center w-30">
                    <Link href='/podcasts'>
                    <h1>Podcasts</h1>
                    </Link>
                    
                </div>

                <div className=" cursor-pointer hover:bg-black bg-[var(--categorie7)] rounded-xl font-bold text-white flex align-center justify-center w-30">
                    <Link href='/telesena'>
                    <h1>TeleSena</h1>
                    </Link>
                    
                </div>

                <div className="cursor-pointer hover:bg-black bg-[var(--categorie8)] rounded-xl font-bold text-white flex align-center justify-center w-30">
                    <h1>Jequiti</h1>
                </div>
                <div className="cursor-pointer hover:bg-black bg-[var(--categorie9)] rounded-xl font-bold text-white flex align-center justify-center w-30">
                <Link href='/aplicativo'>
                    <h1>+SBT</h1>
                    </Link>
                </div>

            </div>
          
        </header>
    )
}