import type { Personagem } from "../../data/personagens"
import { CardPersonagem } from "./card-personagem"

type ListaPersonagensProps = {
    personagens: Personagem[]
}

export function ListaPersonagens({ personagens }: ListaPersonagensProps) {
    return (
        <div className="lista-personagens">
            { personagens.map(( personagem ) => (
                <CardPersonagem key={personagem.id} personagem={personagem} />
            )) }
        </div>
    )
}
