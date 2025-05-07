// Screen Home 
'use client'

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { PROGRAMAS_DATA } from "./programas/data"


import image1 from '../../public/img/carrossel/programapatricia.png'
import image2 from '../../public/img/carrossel/cavernaencantada.png'
import image3 from '../../public/img/carrossel/telesena.png'

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

  const data = PROGRAMAS_DATA


  return (
    <main>
      <div>
        {
          images.map((image, index) => (
            <div key={index} className="flex">
              {/* Se for igual a posição se não for hidden - esconder  */}
              <Image src={image} alt='image' className={(currrentImage == index ? 'w-full transition-all opacity-100 h-[490px] object-cover' : 'hidden')} />
            </div>

          ))
        }
      </div>

      <div className="pt-20 p-10 flex flex-col">

        <h1 className="font-semibold">INSCRIÇÕES</h1>
        <hr className="w-full pt-4" />


        {/* Div dos programas */}
        <div className="relative flex items-center">

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



            {data.map((programa) => (

              <a
                key={programa.slug}
                className="hover:scale-105 transition-transform flex-shrink-0"
                href={'/programas/' + programa.slug}>
                <Image
                  src={programa.image}
                  alt='Inscrições'
                  className="h-[200px] w-[290px] object-cover  shadow-xl rounded-xl" />
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

      <div className="pt-28 px-10">
        <h1 className="font-semibold">SBT SPORTS</h1>
        <hr className="w-full " />

        <div className="flex gap-4 pt-8">

          <img className="w-[600px] h-[420px]" src="../img/noticias/corinthians.png" alt="" />

          <div className="flex grid grid-cols-2 gap-4">

            <img className="w-[310px] h-[190px]" src="../img/noticias/corinthians.png" alt="" />
            <img className="w-[310px] h-[190px]" src="../img/noticias/corinthians.png" alt="" />
            <img className="w-[310px] h-[190px]" src="../img/noticias/corinthians.png" alt="" />
            <img className="w-[310px] h-[190px]" src="../img/noticias/corinthians.png" alt="" />

          </div>
        </div>

      </div>




    </main>

  )
}