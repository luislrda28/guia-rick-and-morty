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
    </>
  )
}

export default App
