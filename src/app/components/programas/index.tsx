export function ProgramasCard() {
    return (
        <section className="flex flex-col gap-10 ml-4 p-10">
            {/* Programas de Auditório */}
            <div>
                <h1 className="font-bold mb-2">Programas de Auditório</h1>
                <div className="overflow-x-auto">
                    <div className="flex flex-nowrap gap-6 w-max">
                        <img className="w-[200px] h-[280px] rounded-xl" src="/img/programas/domingo.png" alt="Domingo" />
                        <img className="w-[200px] h-[280px] rounded-xl" src="/img/programas/patriciaprograma.png" alt="Patrícia" />
                        <img className="w-[200px] h-[280px] rounded-xl" src="/img/programas/ratinho.png" alt="Ratinho" />
                        <img className="w-[200px] h-[280px] rounded-xl" src="/img/programas/thenoite.png" alt="The Noite" />
                        <img className="w-[200px] h-[280px] rounded-xl" src="/img/programas/sabadou.png" alt="Sabadou" />
                        <img className="w-[200px] h-[280px] rounded-xl" src="/img/programas/rodaroda.png" alt="Roda a Roda" />
                        <img className="w-[200px] h-[280px] rounded-xl" src="/img/programas/rodaroda.png" alt="Roda a Roda" />
                        <img className="w-[200px] h-[280px] rounded-xl" src="/img/programas/rodaroda.png" alt="Roda a Roda" />
                        <img className="w-[200px] h-[280px] rounded-xl" src="/img/programas/rodaroda.png" alt="Roda a Roda" />
                        <img className="w-[200px] h-[280px] rounded-xl" src="/img/programas/rodaroda.png" alt="Roda a Roda" />
                        <img className="w-[200px] h-[280px] rounded-xl" src="/img/programas/rodaroda.png" alt="Roda a Roda" />

                    </div>
                </div>
            </div>

            {/* Filmes, Séries e Desenhos */}
            <div>
                <h1 className="font-bold mb-2">Filmes, Séries e Desenhos</h1>
                <div className="overflow-x-auto">
                    <div className="flex flex-nowrap gap-6 w-max">
                        <img className="w-[200px] h-[280px] rounded-xl" src="/img/programas/sabadoanimado.png" alt="Sábado Animado" />
                        <img className="w-[200px] h-[280px] rounded-xl" src="/img/programas/cineespetacular.png" alt="Cine Espetacular" />
                        <img className="w-[200px] h-[280px] rounded-xl" src="/img/programas/cinema.png" alt="Cinema" />
                        <img className="w-[200px] h-[280px] rounded-xl" src="/img/programas/bro99.png" alt="Bro99" />
                        <img className="w-[200px] h-[280px] rounded-xl" src="/img/programas/thechosen.png" alt="Cinema" />
                        <img className="w-[200px] h-[280px] rounded-xl" src="/img/programas/sabadoemserie.png" alt="Cinema" />
                        <img className="w-[200px] h-[280px] rounded-xl" src="/img/programas/cinema.png" alt="Cinema" />
                        <img className="w-[200px] h-[280px] rounded-xl" src="/img/programas/teladesucessos.png" alt="Cinema" />

                    </div>
                </div>
            </div>


            {/* Realites */}
            <div>
                <h1 className="font-bold mb-2">Realities</h1>
                <div className="overflow-x-auto">
                    <div className="flex flex-nowrap gap-6 w-max">
                        <img className="w-[200px] h-[280px] rounded-xl" src="/img/programas/moda.png" alt="Esquadrão da Moda" />
                        <img className="w-[200px] h-[280px] rounded-xl" src="/img/programas/bakeoff.png" alt="BAKE OFF BRASIL" />
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
