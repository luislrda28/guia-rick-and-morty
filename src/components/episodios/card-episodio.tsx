import type { Episodio } from "../../data/episodios"

type CardEpisodioProps = {
    episodio: Episodio
}

export function CardEpisodio({ episodio }: CardEpisodioProps) {
    return (
        <article className="card-episodio">
            <span className="codigo">{ episodio.codigo }</span>
            <div>
                <h3>{ episodio.nome }</h3>
                <p>Exibido em { episodio.dataExibicao }</p>
                <p className="comentario">{ episodio.comentario }</p>
            </div>
        </article>
    )
}
