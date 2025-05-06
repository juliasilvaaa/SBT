import Image from "next/image"
import { PROGRAMAS_DATA } from "./data"

export default function Programas() {
    const groupedData = PROGRAMAS_DATA.reduce((acc, item) => {
        acc[item.categorie] = acc[item.categorie] || []
        acc[item.categorie].push(item)
        return acc
    }, {} as Record<string, typeof PROGRAMAS_DATA>)

    return (
                          // Espaço entre as categorias
        <section className="space-y-6 p-6">
            {Object.entries(groupedData).map(([category, items]) => (
                //  Row                           Rolagem (overflow-x-auto) - Fazer rolagem conforme o usuario clicar no botao
                <div key={category} className="">
                    <h2 className="text-2xl font-bold mb-4">{category}</h2>
                    <div className="flex flex-wrap gap-4 w-max">
                        {items.map((programa) => (
                            <a
                                href={'/programas/' + programa.slug}
                                key={programa.title}
                                className="hover:scale-105 transition-transform "
                            >
                                <Image
                                    className="w-[230px] h-[330px] rounded-xl object-cover  shadow-xl/30"
                                    src={programa.image}
                                    alt={`Imagem ${programa.title}`}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}
