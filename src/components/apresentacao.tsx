type ApresentacaoProps = {
    totalPersonagens: number
    totalEpisodios: number
}

export function Apresentacao({
    totalPersonagens,
    totalEpisodios
}: ApresentacaoProps) {
    return (
        <section className="apresentacao">
            <div className="portal"></div>

            <div className="apresentacao-texto">
                <h1>Guia de personagens</h1>
                <p>
                    Conheça quem é quem no multiverso de Rick and Morty: humanos,
                    alienígenas e muitas versões do Rick.
                </p>

                <div className="contadores">
                    <div>
                        <strong>{ totalPersonagens }</strong>
                        <span>personagens</span>
                    </div>
                    <div>
                        <strong>{ totalEpisodios }</strong>
                        <span>episódios favoritos</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
