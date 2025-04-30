import { Infosbt } from "../components/info_sbt"
import { Linha } from "../components/linha_do_tempo"

export default function InfoPage() {
    return (
        <>
            <section className="flex justify-center pt-8">
                <Infosbt />
            </section>

            <h1 className="font-bold text-xl flex justify-center pt-10">Linha do Tempo</h1>
            <div className="flex justify-center pt-10">

                <Linha />
            </div>


        </>
    )
}
