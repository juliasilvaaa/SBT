
export default function Aplicativo() {
    return (
        <div className="flex gap-10 items-center justify-center pt-10">
            <img className="w-[520px] h-[532px] rounded-xl" src="../img/appsbt.png" alt="Aplicativo" />
            <div>
                <h1 className="text-[var(--fontcolor)]">Aplicativo</h1>
                <h1 className="font-bold text-2xl">+SBT</h1>
                <h1>Sobre</h1>

                <hr className="border-t-1 border-[var(--liveoff)] pt-2 w-[80vh]" />
                <h1 className="pt-6 w-[520px]">
                 O +SBT é o streaming gratuito com conteúdo sob demanda, canais ao vivo e o SBT 
                 em tempo real! Assista novelas, desenhos, programas series, filmes, documentários, 
                 produções originais e muito +.
                </h1>

                <div className="flex justify-center pt-10">
                    <button className="bg-[var(--appinstall)] flex justify-center items-center rounded-xl w-[270px] h-[52px]">
                    <a className="text-white" href="https://mais.sbt.com.br/">Confira</a>
                </button>
                </div>

                
            </div>


        </div>

    )

}