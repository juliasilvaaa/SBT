
import { NOTICIAS_DATA } from "./data";
import Image from "next/image"

export default function Noticias() {
    const noticia = NOTICIAS_DATA
    return (
        <section>
            <div className="flex flex-col lg:flex-row gap-4 p-6 h-[490px]">

                   {/* Destaque */}
                <div className="w-full bg-white rounded-xl">
                    <Image
                        alt={noticia[0].title}
                        src={noticia[0].images}
                        className="w-full h-[310px] object-cover rounded-xl"
                    />
                    <div className="p-2">
                        <h1 className="font-bold">{noticia[0].categorie}</h1>
                        <h1 className="text-xl font-semibold font-poltawski">{noticia[0].title}</h1>
                        <p className="text-sm text-gray-600">{noticia[0].resumo}</p>
                    </div>

                </div>  
              
               

                {/* Itens Laterais */}
                <div className="flex flex-col gap-4">
                    {/*  Slice - Definindo limite das noticias */}
                    {noticia.slice(1, 3).map((noticia) => (

                        <a key={noticia.slug} href={'/noticias/' + noticia.slug}>
                            <div className="flex bg-white rounded-xl h-[220px]">
                                <Image
                                    alt={noticia.title}
                                    src={noticia.images}
                                    className="object-cover rounded-xl h-full w-[220px]"
                                />
                                <div key={noticia.slug} className="flex flex-col p-4">
                                    <h1 className="font-bold">{noticia.categorie}</h1>

                                    <h2 className="text-xl font-semibold font-poltawski">{noticia.title}</h2>
                                    <h1>{noticia.resumo}</h1>
                                </div>
                            </div>
                        </a>


                    ))}
                </div>

            </div>

            <div className="flex flex-col gap-10 p-10">
                {noticia.slice(3, 5).map((noticia) => (
                    <div key={noticia.slug} className="bg-white h-[230px] w-full rounded-xl">


                        <a
                            href={'/noticias/' + noticia.slug}
                            key={noticia.title}
                        >
                            <div className="flex h-full">
                                <Image
                                    src={noticia.images}
                                    className="h-full w-[220px] object-cover rounded-xl"
                                    alt="Imagem" />


                                <div className="flex flex-col p-2">
                                    <h1 className="font-bold">{noticia.categorie}</h1>
                                    <h2 className="text-xl font-semibold font-poltawski">{noticia.title}</h2>
                                    <h1>{noticia.resumo}</h1>
                                </div>
                            </div>

                        </a>


                    </div>
                ))}
            </div>

        </section>
    )
}