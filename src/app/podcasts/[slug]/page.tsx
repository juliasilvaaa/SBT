import Image from "next/image"
import { PODCAST_DATA } from "../data"

interface PodcastInterface {
    params: {
        slug: string
    }
}


export default function PodcastInfo({ params }: PodcastInterface) {
    const programSlug = params.slug
    // O fliter sempre busca de acordo com a condição, então se ele achar dois ou mais vai retornar dentro de um ARRAY - [0] Pegando o 1 item 
    const program = PODCAST_DATA.filter((program) => program.slug === programSlug)[0]



    return (
        <section className="flex justify-center">
            <div className="flex gap-10 rounded-2xl p-8">
                {/* Padrão do NEXT - Image para maior itmização da imagem e importação */}
                <Image src={program.image} alt="" quality={100} height={600} width={470} className="w-[470px] h-[600px] object-cover" />

                <div className="pt-20">
                    <h1 className="text-[var(--fontcolor)]">PodCast</h1>

                    <div className="flex items-center gap-5">
                        <h1 className="uppercase font-bold text-5xl">{program?.title}</h1>
                        <div className={`h-[30px] outlined-black w-[80px] rounded-md flex justify-center items-center  ${program.live ? "bg-[var(--live)]" : "bg-[var(--liveoff)]"}`}>
                            <h1 className="text-white text-xs">AO VIVO</h1>
                        </div>

                    </div>

                    <h1 className="text-[var(--fontcolor)] pt-10">Sobre</h1>
                    <hr className="border-t-1 border-[var(--liveoff)] pt-2 w-[80vh]" />
                    <h1 className="pt-6 w-[520px]">{program.description}</h1>
                </div>

            </div>
        </section>

    )
}