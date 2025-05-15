
import Image from "next/image"
import { IPodcast, IPodcastResponse } from "../interfaces/podcasts"
import { getStrapiImage } from "../utils/strapi-image"

export async function getPodcast(): Promise<IPodcast[]> {
  const res = await fetch("http://localhost:1337/api/podcasts?populate=*", {
    next: { revalidate: 60}
  })
  if(!res.ok) throw new Error("Falha ao buscar")

  const json: IPodcastResponse = await res.json();
  return json.data
  
}

export default async function PodCasts() {
  const podcasts = await getPodcast();
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center pt-10 max-w-6xl mx-auto">
      {podcasts.map(podcast => (
        <a key={podcast.id} href="" className="hover:scale-105 transition-transform">
          <div>
             <Image 
             alt="Podcast"
             width={100} 
             height={100} 
             src={getStrapiImage(podcast.image_cover.url)}/>
          </div>
         

        </a>
      ))}
    </section>
    
  )

}