export default function PodCasts() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center pt-10 max-w-6xl mx-auto">
      {[
        "/podcasts/bits.png",
        "/podcasts/dropados.png",
        "/podcasts/callofcast.png",
        "/podcasts/azamigas.png",
        "/podcasts/pivotando.png",
        "/podcasts/focoesg.png",
        "/podcasts/ninho.png"
      ].map((img, i) => (
        <div key={i}>
          <img
            className="w-[280px] h-[200px] rounded-xl object-cover"
            src={`/img/${img}`}
            alt={`Imagem ${i + 1}`}
          />
        </div>
      ))}
    </section>
  )

}