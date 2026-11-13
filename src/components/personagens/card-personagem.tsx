import type { Personagem } from "../../data/personagens"

type CardPersonagemProps = {
    personagem: Personagem
}

export function CardPersonagem({ personagem }: CardPersonagemProps) {
    return (
        <article className="card-personagem">
            <h3>{ personagem.nome }</h3>
            <p className={"status status-" + personagem.status}>
                { personagem.status } · { personagem.especie }
            </p>
            <p className="rotulo">Origem</p>
            <p className="origem">{ personagem.origem }</p>
        </article>
    )
}
