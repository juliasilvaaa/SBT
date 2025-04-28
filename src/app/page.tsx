
export default function Home(){
  return(
    <main>

      {/* Div Noticias */}

      <div className="bg-[var(--categorienoticia)] p-2 flex justify-end h-[33px] w-[170px] text-white font-bold rounded-r-lg">
        <h1 className="">
          Mundo
        </h1>
      </div>
      <div id="noticias" className="ml-10 pt-20">

        {/* Div Noticias do Mundo */}
        <div id="mundo" className="flex gap-4">

          <div id="papa">
            <img className="w-50" src="./img/papa.png" alt="Papa" />
          </div>

          <div id="lula">
          <img className="w-50" src="./img/lula.png" alt="Lula" />
          </div>

          <div id="guerra">
          <img className="w-50" src="./img/guerra.png" alt="Guerra" />
          </div>

        </div>

      {/* Div noticias futebol */}

      {/* <div className="bg-red-200 h-[33px] w-[170px]  ">
        <h1>
          Futebol
        </h1>
      </div> */}

        <div id="futebol" className="flex gap-4 pt-10">

        <div id="corinthians">
            <img className="w-50" src="./img/corinthians.png" alt="Papa" />
          </div>

          <div id="palmeiras">
          <img className="w-50" src="./img/palmeiras.png" alt="Palmeiras" />
          </div>

          <div id="saopaulo">
          <img className="w-50" src="./img/saopaulo.png" alt="Sao Paulo" />
          </div>


        </div>

      </div>
    </main>
 
  )
}