import Image from "next/image"
import { PROGRAMAS_DATA } from "./data"

export default function Programas() {
    const groupedData = PROGRAMAS_DATA.reduce((acc, item) => {
        acc[item.categorie] = acc[item.categorie] || []
        acc[item.categorie].push(item)
        return acc
    }, {} as Record<string, typeof PROGRAMAS_DATA>)

    return (
        <section className="space-y-10 p-6">
            {Object.entries(groupedData).map(([category, items]) => (
                //  Row 
                <div key={category} className="overflow-x-auto">
                    <h2 className="text-2xl font-bold mb-4">{category}</h2>
                    <div className="flex flex-wrap gap-4 w-max">
                        {items.map((programa) => (
                            <a
                                href={'/programas/' + programa.slug}
                                key={programa.title}
                                className="hover:scale-105 transition-transform"
                            >
                                <Image
                                    className="w-[230px] h-[330px] rounded-xl object-cover"
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
