import { useState } from "react"
import './App.css'
import { Cabecalho } from "./components/layout/cabecalho"
import { Rodape } from "./components/layout/rodape"
import { Apresentacao } from "./components/apresentacao"
import { ListaPersonagens } from "./components/personagens/lista-personagens"
import { ListaEpisodios } from "./components/episodios/lista-episodios"
import { personagens } from "./data/personagens"
import { episodios } from "./data/episodios"
import { listaStatus } from "./data/status"

function App() {
  const [statusAtivo, setStatusAtivo] = useState('todos')

  function handleSelecionarStatus(alias: string) {
    setStatusAtivo(alias)
  }

  const personagensFiltrados = statusAtivo == 'todos'
    ? personagens
    : personagens.filter((personagem) => personagem.status == statusAtivo)

  return (
    <>
      <Cabecalho />

      <main>
        <Apresentacao
          totalPersonagens={personagens.length}
          totalEpisodios={episodios.length}
        />

        <ListaPersonagens
          personagens={personagensFiltrados}
          listaStatus={listaStatus}
          statusAtivo={statusAtivo}
          onSelecionarStatus={handleSelecionarStatus}
        />

        <ListaEpisodios episodios={episodios} />
      </main>

      <Rodape />
    </>
  )
}

export default App
