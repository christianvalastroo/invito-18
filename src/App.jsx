import { useRef, useState } from 'react'
import './App.css'
import invitationAudio from './assets/audio/invito-gioele.m4a'
import BackgroundGlints from './components/BackgroundGlints/BackgroundGlints'
import Envelope from './components/Envelope/Envelope'

function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false)
  const invitationAudioRef = useRef(null)

  const handleEnvelopeOpen = () => {
    setIsEnvelopeOpen(true)

    if (invitationAudioRef.current) {
      invitationAudioRef.current.currentTime = 0
      invitationAudioRef.current.volume = 0.55
      void invitationAudioRef.current.play().catch(() => undefined)
    }
  }

  return (
    <main className={`invitation-scene ${isEnvelopeOpen ? 'is-envelope-open' : ''}`}>
      <div className="scene-overlay" aria-hidden="true" />
      <BackgroundGlints />

      <section className="invitation-hero" aria-label="Invito al diciottesimo di Gioele">
        <Envelope
          isOpen={isEnvelopeOpen}
          onOpen={handleEnvelopeOpen}
        />
        <p className="open-hint" aria-hidden={isEnvelopeOpen}>
          Tocca la busta per aprire l&apos;invito
        </p>
      </section>

      <audio
        ref={invitationAudioRef}
        src={invitationAudio}
        preload="auto"
        aria-hidden="true"
      />
    </main>
  )
}

export default App
