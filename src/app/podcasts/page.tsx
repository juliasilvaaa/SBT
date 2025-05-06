
import { PODCAST_DATA } from "./data"
import Image from "next/image"


export default function PodCasts() {
  const data = PODCAST_DATA
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center pt-10 max-w-6xl mx-auto">
      {data.map((podcast) => (
        // Key - Como se fosse um identificador do map
        <a className="hover:scale-105 transition-transform" href={'/podcasts/' + podcast.slug} key={podcast.title}>
          <div className="relative">
            <Image
            width={280}
            height={200}
              className="w-[280px] h-[200px] rounded-xl object-cover "
              src={podcast.image}
              alt={`Imagem ${podcast.title}`}
            />
            <div className="bg-white absolute bottom-0 w-full rounded-bl-lg rounded-br-lg h-[35px] flex justify-between px-2 pt-2">
              <h1 className="flex align-center justify-center font-bold text-[var(--fontcolor)] uppercase text-sm">{podcast.title}</h1>

              <div className={`h-[20px] w-[60px] rounded-md flex justify-center ${podcast.live ? "bg-[var(--live)]" : "bg-[var(--liveoff)]"}`}>
                <h1 className="text-white text-xs">AO VIVO</h1>
              </div>
            </div>
          </div>
        </a>))}
    </section>
  )

}