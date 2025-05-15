
import { IProgram, IProgramResponse } from "../interfaces/programs";
import Image from "next/image"
import { getStrapiImage } from "../utils/strapi-image";


async function getProgramas(): Promise<IProgram[]> {
    const res = await fetch("http://localhost:1337/api/programs?populate=*", {
        next: {revalidate: 60} // Revalidando a cada 60 segundos
    
    });
    if(!res.ok) throw new Error("Falha ao buscar")

    const json: IProgramResponse = await res.json();
    return json.data;
    
    
}

export default async function ProgramaPage() {
    const programs = await getProgramas();
    console.log(programs)
    

    return(
        // Categories Programas
        <section>
            {programs.map(program => (
                <a href="" key={program.id}>
                    <h1>{program.title}</h1>
                    <Image width={100} height={100} src={getStrapiImage(program.cover.url)} alt="Imagem" className=""/>
                </a>
            ))}
        </section>
    )
}

