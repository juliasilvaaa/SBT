// Screen Home 
'use client'

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { PROGRAMAS_DATA } from "./programas/data"
import { Footer } from "./components/footer" 


import image1 from '../../public/img/carrossel/programapatricia.png'
import image2 from '../../public/img/carrossel/cavernaencantada.png'
import image3 from '../../public/img/carrossel/telesena.png'
import { NOTICIAS_DATA } from "./noticias/data"


// Array das imagens do nosso carrosel
const images: any[] = [image1, image2, image3]

export default function Home() {

  const [currrentImage, setCurrentImage] = useState(0)

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


  // Executando o codigo dentro do tempo que estabelecemos
  useEffect(() => {
    const timer = setInterval(() => {
      // Somando ao valor anterior da imagem somando mais um para achar o valor
      setCurrentImage(prevImage => (prevImage + 1) % images.length)
    }, 4000)
    return () => {
      clearInterval(timer)
    }
  })


  //  Filtro para exibir os programas que tem inscrições
  // const data = PROGRAMAS_DATA.filter((programa) =>
  //   programa.inscricoes !== undefined || programa.inscricoes !== null
  // )


  // Utilizando chaves precisa de um return
  // const data = PROGRAMAS_DATA.filter((programa) =>{
  //   Condição para exibir os que não for nem null nem undefined
  //   return programa.inscricoes?.length 
  // })

  // Extraindo todas as inscrições

  const data: any = []
  PROGRAMAS_DATA.forEach((programa) => {
    // Como tem programas que não tem alguma coisa, ele vai cair no array vazio
    const inscricoes = programa.inscricoes || []
    // Colocando contéudo dentro do data (inscrições)  
    // (...inscricoes = como a inscricao era um array, e colocamos a inscricao em um array, tiramos o nivel ) 
    // Itera, ve que é um array e extrai de dentro d array, pegando os objetos
    return data.push(...inscricoes)
  })

  const noticias = NOTICIAS_DATA

  return (
    <main>
      <div>
        {
          images.map((image, index) => (
            <div key={index} className="flex">
              {/* Se for igual a posição se não for hidden - esconder  */}
              <Image 
              src={image} 
              alt='image' 
              quality={100}
              className={(currrentImage == index ? 'w-full transition-all opacity-100 h-[590px] object-cover' : 'hidden')} />
            </div>

          ))
        }
      </div>

      <div className="pt-20 p-10 flex flex-col">

        <h1 className="font-semibold">INSCRIÇÕES</h1>
        <hr className="w-full pt-4" />


        {/* Div dos programas */}
        <div className="relative  flex items-center">

          {/* Botão esquerdo */}

          <button
            onClick={() => scroll('left')}
            className="absolute left-0 z-10 bg-white w-[50px] h-[50px] rounded-full shadow-md"
          >
            ←
          </button>

          <div
            ref={scrollRef}
            className="flex gap-10 flex-row w-full overflow-x-auto scroll-smooth scrollbar-hide py-4 px-8">
            {/* Array dos programas de auditorio que tem a opção de inscrever-se (criar mais um objeto para guardar e depois verificar qual tem a opcoa de se inscrever ou não) */}


            {/* Tipagem */}
            {data.map((inscricoes: any, index: number) => (

              <a
                // Usando o index como key, porque cada um tem seu valor
                key={index}
                title={inscricoes.title}
                className="hover:scale-105 transition-transform flex-shrink-0"
                href={'/programas/' + inscricoes.slug}>
                <div className="relative">
                  <Image
                    src={inscricoes.image}
                    alt={inscricoes.title}
                    className="h-[200px] w-[290px] object-cover rounded-xl" />
                  <div className="absolute inset-x-0 bottom-0 flex justify-center bg-white rounded-b-lg">
                    <h1 className="">{inscricoes.title}</h1>
                  </div>
                </div>
              </a>
            ))}
          </div>
          {/* Botão direito */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 z-10 bg-white w-[50px] h-[50px] rounded-full shadow-md"
          >
            →
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 p-6">
        {/* Destaque */}
        <div className="w-full lg:w-2/3">
          <Image
            alt={noticias[0].title}
            src={noticias[0].images}
            className="w-full h-[420px] object-cover rounded-lg"
          />
          <h1 className="mt-2 text-xl font-bold">{noticias[0].title}</h1>
          <p className="text-sm text-gray-600">{noticias[0].resumo}</p>
        </div>

        {/* Itens Laterais */}
        <div className="grid grid-cols-2 gap-4">
        {/*  Slice - Definindo limite das noticias */}
          {noticias.slice(1,5).map((noticia) => (
            <div key={noticia.slug} className="flex flex-col">
              <Image
                alt={noticia.title}
                src={noticia.images}
                className="w-full h-[190px] w-[310px] object-cover rounded"
              />
              <h2 className="mt-1 text-sm font-semibold">{noticia.title}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Button para mais noticias */}
      <div className="flex justify-center">
         <div className="flex justify-center items-center h-[50px] w-[210px] bg-black text-white rounded-full">
          <a href="">VEJA MAIS</a>
      </div>
      </div>
    </main>

   
  )
}