import './Envelope.css'

function Envelope() {
  return (
    <button className="envelope-button" type="button" aria-label="Apri l'invito">
      <span className="envelope-shadow" aria-hidden="true" />

      <span className="envelope" aria-hidden="true">
        <span className="envelope-back" />
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
