import './Envelope.css'
import InvitationCard from '../InvitationCard/InvitationCard'

function Envelope({ isOpen, onOpen }) {
  return (
    <button
      className={`envelope-button ${isOpen ? 'is-open' : ''}`}
      type="button"
      aria-label={isOpen ? 'Busta aperta' : "Apri l'invito"}
      aria-expanded={isOpen}
      onClick={onOpen}
      disabled={isOpen}
    >
      <span className="envelope-shadow" aria-hidden="true" />

      <span className="envelope" aria-hidden="true">
        <span className="envelope-back" />
        <InvitationCard />
        <span className="envelope-flap" />
        <span className="envelope-pocket" />
        <span className="envelope-seal">
          <span>18</span>
        </span>
      </span>
    </button>
  )
}

export default Envelope
