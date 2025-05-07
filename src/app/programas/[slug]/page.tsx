import { secureHeapUsed } from "crypto"
import { PROGRAMAS_DATA } from "../data"
import Image from "next/image"

interface ProgramInterface {
    params: {
        slug: string
    }

}

export default function InfoProgram({ params }: ProgramInterface) {
    const programsSlug = params.slug
    const program = PROGRAMAS_DATA.filter((program) => program.slug === programsSlug)[0]
    return (
        <section className="flex justify-center pt-10">
            <div className="flex gap-10">
                <Image className="w-[390px] h-[540px] rounded-xl"
                    src={program.image}
                    alt={`Programa ${program.title}`}
                />

                <div className="pt-10">
                    <h1 className="text-[var(--fontcolor)]">Programas</h1>
                    <h1 className="font-bold text-2xl">{program.title}</h1>

                    <h1 className="text-[var(--fontcolor)] pt-10">Sobre</h1>
                    <hr className="border-t-1 border-[var(--liveoff)] pt-2 w-[80vh]" />
                    <h1 className="pt-6 w-[520px]">{program.description}</h1>

                    <div className="pt-10">
                        <h1 className="text-[var(--fontcolor)]">Apresentador (a)</h1>

                        <div className="flex gap-4">
                            {/* Como eu tinha feito um array de apresentadores, utilizando o map para renderizar cada apresentador  */}
                            {program.apresentadores.map((apresentador, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <Image
                                        src={apresentador.image}
                                        alt={apresentador.name}
                                        className="w-24 h-24 rounded-full object-cover"
                                    />
                                    <span className="text-sm mt-2">{apresentador.name}</span>
                                </div>
                            ))}
                        </div>




                    </div>
                </div>



            </div>


        </section>
    )
}