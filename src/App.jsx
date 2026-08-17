import { useState } from 'react'
import './App.css'
import Envelope from './components/Envelope/Envelope'

function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false)

  return (
    <main className={`invitation-scene ${isEnvelopeOpen ? 'is-envelope-open' : ''}`}>
      <div className="scene-overlay" aria-hidden="true" />

      <section className="invitation-hero" aria-label="Invito al diciottesimo di Gioele">
        <Envelope
          isOpen={isEnvelopeOpen}
          onOpen={() => setIsEnvelopeOpen(true)}
        />
        <p className="open-hint" aria-hidden={isEnvelopeOpen}>
          Tocca per aprire
        </p>
      </section>
    </main>
  )
}

export default App
