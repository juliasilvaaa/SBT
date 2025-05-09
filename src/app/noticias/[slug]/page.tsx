import { NOTICIAS_DATA } from "../data"
import Image from "next/image"

interface NoticiasInterface {
    params: {
        slug: string
    }
}

export default function InfoNoticia({ params }: NoticiasInterface) {
    const noticieSlug = params.slug
    const noticie = NOTICIAS_DATA.filter((noticie) => noticie.slug === noticieSlug)[0]

    return (
        <div className="flex flex-col justify-start p-10 gap-2">

            <p className="font-bold" key={noticie.slug}>{noticie.categorie}</p>
            <h1 className="text-4xl font-semibold font-poltawski">{noticie.title}</h1>
            <h1 className="font-poltawski text-xl pt-2">{noticie.resumo}</h1>

            <Image quality={100} className="pt-2 w-[890px] rounded-md h-[530px] object-cover"  alt="Image" src={noticie.images}/>

            <div className="w-[1040px] pt-10" >
              <h1 className="font-semibold font-poltawski text-xl">
                {noticie.description}
            </h1>  
            </div>

            
        </div>

    )
}