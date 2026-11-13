import './App.css'
import { Cabecalho } from "./components/layout/cabecalho"
import { Rodape } from "./components/layout/rodape"
import { Apresentacao } from "./components/apresentacao"
import { ListaPersonagens } from "./components/personagens/lista-personagens"
import { ListaEpisodios } from "./components/episodios/lista-episodios"
import { personagens } from "./data/personagens"
import { episodios } from "./data/episodios"

function App() {
  return (
    <>
      <Cabecalho />

      <main>
        <Apresentacao
          totalPersonagens={personagens.length}
          totalEpisodios={episodios.length}
        />

        <section id="personagens" className="secao">
          <div className="secao-topo">
            <h2>Personagens</h2>

            <div className="filtros">
              <button className="filtro filtro-ativo">Todos</button>
              <button className="filtro filtro-vivo">Vivo</button>
              <button className="filtro filtro-morto">Morto</button>
              <button className="filtro filtro-desconhecido">Desconhecido</button>
            </div>
          </div>

          <ListaPersonagens personagens={personagens} />
        </section>

        <ListaEpisodios episodios={episodios} />
      </main>

      <Rodape />
    </>
  )
}

export default App
