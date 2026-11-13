import type { Episodio } from "../../data/episodios"
import { CardEpisodio } from "./card-episodio"

type ListaEpisodiosProps = {
    episodios: Episodio[]
}

export function ListaEpisodios({ episodios }: ListaEpisodiosProps) {
    return (
        <section id="episodios" className="secao">
            <div className="secao-topo">
                <h2>Episódios favoritos</h2>
            </div>

            <div className="lista-episodios">
                { episodios.map(( episodio ) => (
                    <CardEpisodio key={episodio.id} episodio={episodio} />
                )) }
            </div>
        </section>
    )
}
