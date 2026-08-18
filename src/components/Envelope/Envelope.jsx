import './Envelope.css'
import InvitationCard from '../InvitationCard/InvitationCard'

function Envelope({ isOpen, onOpen }) {
  return (
    <div
      className={`envelope-button ${isOpen ? 'is-open' : ''}`}
    >
      <button
        className="envelope-trigger"
        type="button"
        aria-label={isOpen ? 'Busta aperta' : "Apri l'invito"}
        aria-expanded={isOpen}
        onClick={onOpen}
        disabled={isOpen}
      />

      <span className="envelope-shadow" aria-hidden="true" />

      <div className="envelope">
        <span className="envelope-back" aria-hidden="true" />
        <InvitationCard />
        <span className="envelope-flap" aria-hidden="true" />
        <span className="envelope-pocket" aria-hidden="true" />
        <span className="envelope-seal" aria-hidden="true">
          <span>18</span>
        </span>
      </div>
    </div>
  )
}

export default Envelope
