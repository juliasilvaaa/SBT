'use client'

import Image from "next/image"
import { PROGRAMAS_DATA } from "../programas/data"
import { useState } from "react"



export default function Programacao() {

    // Programação Diaria

    // Criando uma variavel para armazenar os dias da semana
    const diasSemana = [
        'domingo',
        'segunda',
        'terca',
        'quarta',
        'quinta',
        'sexta',
        'sabado'
    ]

    // Criando uma variavel para armazenar o dia de HOJE
    const today = new Date()
    const [diaSelecionado, setDiaSelecionado] = useState<string>(
        diasSemana[today.getDay()]
    )

    // Criando um filtro para o dia escolhido
   const programasDoDia = PROGRAMAS_DATA.flatMap((programa) => {
    return programa.schedule?.filter((s) => s?.day === diaSelecionado).map((s) =>({
        ...programa,
        horario: s?.time,
    }))
   })

    const programasOrdenados = programasDoDia.sort((a, b) => {
        const [ha, ma] = a.horario.split(":").map(Number)
        const [hb, mb] = b.horario.split(":").map(Number)
        return ha * 60 + ma - (hb * 60 + mb)
    })



    const data = PROGRAMAS_DATA
    return (
        <section className="flex flex-col gap-8 justify-items-center p-10">

            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="font-bold text-2xl">Programação</h1>
                <hr className="w-full"/>
            </div>

            <div>
                <label className="">Selecione o dia: </label>
                <select 
                value={diaSelecionado}
                onChange={(e) => setDiaSelecionado(e.target.value)}
                className="border-2 border-black/50 rounded-md"
                > 

                {diasSemana.map((dia) => (
                    <option key={dia} value={dia}>
                        {dia.charAt(0).toUpperCase() + dia.slice(1)}
                    </option>
                ))}

                </select>
            </div>

          {/* Lista dos programas */}
            {programasOrdenados.length > 0 ? (
                programasOrdenados.map((programa, index) => (
                    <div key={index} className="bg-white rounded-md flex gap-4 h-[120px] shadow-sm">
                        <Image
                            src={programa.image}
                            alt={programa.title}
                            className="h-full w-[190px] rounded-md object-cover"
                            width={190}
                            height={120}
                        />
                        <div className="flex flex-col justify-center">
                            <p className="text-sm text-gray-500">{programa.horario}</p>
                            <h1 className="text-lg font-bold">{programa.title}</h1>
                            
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-gray-500">Nenhum programa agendado para {diaSelecionado}.</p>
            )}

        </section>


    )
}