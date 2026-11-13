import type { Personagem } from "../../data/personagens"
import type { Status } from "../../data/status"
import { CardPersonagem } from "./card-personagem"
import { FiltroStatus } from "./filtro-status"

type ListaPersonagensProps = {
    personagens: Personagem[]
    listaStatus: Status[]
    statusAtivo: string
    onSelecionarStatus: (alias: string) => void
}

export function ListaPersonagens({
    personagens,
    listaStatus,
    statusAtivo,
    onSelecionarStatus
}: ListaPersonagensProps) {
    return (
        <section id="personagens" className="secao">
            <div className="secao-topo">
                <h2>Personagens</h2>

                <FiltroStatus
                    listaStatus={listaStatus}
                    statusAtivo={statusAtivo}
                    onSelecionarStatus={onSelecionarStatus}
                />
            </div>

            <div className="lista-personagens">
                { personagens.map(( personagem ) => (
                    <CardPersonagem key={personagem.id} personagem={personagem} />
                )) }
            </div>
        </section>
    )
}
