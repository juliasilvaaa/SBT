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
                        <h1 className="text-[var(--fontcolor)]">Apresentador</h1>
                    <Image className="w-[120px] h-[110px] rounded-full"
                    quality={100}
                    height={110}
                    width={120}
                    src={program.apresentadorimg}
                    alt={`Programa ${program.apresentador}`}
                />
                    </div>
                </div>



            </div>


        </section>
    )
}