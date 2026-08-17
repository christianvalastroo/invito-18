import './App.css'
import Envelope from './components/Envelope/Envelope'

function App() {
  return (
    <main className="invitation-scene">
      <div className="scene-overlay" aria-hidden="true" />

      <section className="invitation-hero" aria-label="Invito al diciottesimo di Gioele">
        <Envelope />
        <p className="open-hint">Tocca per aprire</p>
      </section>
    </main>
  )
}

export default App
