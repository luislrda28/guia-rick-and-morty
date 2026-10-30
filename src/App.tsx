import './App.css'

function App() {
  return (
    <>
      <header className="cabecalho">
        <a href="#" className="logo">Multiverso</a>

        <button className="menu-botao" aria-label="Abrir menu">☰</button>

        <nav className="menu">
          <a href="#personagens">Personagens</a>
          <a href="#episodios">Episódios</a>
          <a href="#sobre">Sobre</a>
        </nav>
      </header>

      <main>
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
                <strong>10</strong>
                <span>personagens</span>
              </div>
              <div>
                <strong>3</strong>
                <span>episódios favoritos</span>
              </div>
            </div>
          </div>
        </section>

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

          <div className="lista-personagens">
            <article className="card-personagem"></article>
            <article className="card-personagem"></article>
            <article className="card-personagem"></article>
            <article className="card-personagem"></article>
            <article className="card-personagem"></article>
            <article className="card-personagem"></article>
            <article className="card-personagem"></article>
            <article className="card-personagem"></article>
            <article className="card-personagem"></article>
            <article className="card-personagem"></article>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
