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
      </main>
    </>
  )
}

export default App
