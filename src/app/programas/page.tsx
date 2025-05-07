
'use client'
import Image from "next/image"
import { PROGRAMAS_DATA } from "./data"
import { useRef } from "react"

export default function Programas() {
    const groupedData = PROGRAMAS_DATA.reduce((acc, item) => {
        acc[item.categorie] = acc[item.categorie] || []
        acc[item.categorie].push(item)
        return acc
    }, {} as Record<string, typeof PROGRAMAS_DATA>)

    const scrollRef = useRef<HTMLDivElement | null>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 300
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }


    return (
        // Espaço entre as categorias
        <section className="p-10 flex flex-col gap-6">
            {Object.entries(groupedData).map(([category, items]) => (
                //  Row   
                <div key={category} className="flex flex-col">
                    <h2 className="text-2xl font-bold mb-4">{category}</h2>
                    <div className="flex relative items-center gap-6">
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-0 z-10 bg-white w-[50px] h-[50px] rounded-full shadow-md"
                        >
                            ←
                        </button>
                        {items.map((programa) => (

                            <a
                                href={'/programas/' + programa.slug}
                                key={programa.title}
                                className="hover:scale-105 transition-transform flex-shrink-0 "
                            >
                                <Image
                                    className="w-[230px] h-[330px] rounded-xl object-cover shadow-xl/30"
                                    src={programa.image}
                                    alt={`Imagem ${programa.title}`}
                                />
                            </a>
                        ))}

                        {/* Botão direito */}
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-0 z-10 bg-white w-[50px] h-[50px] rounded-full shadow-md"
                        >
                            →
                        </button>
                    </div>
                </div>
            ))}
        </section>
    )
}
