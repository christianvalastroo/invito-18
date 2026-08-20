import './InvitationCard.css'

function InvitationCard() {
  return (
    <article className="invitation-card">
      <header className="card-heading">
        <span className="card-kicker">Sei invitato al mio</span>
        <strong className="card-age">18</strong>
        <span className="card-name">Gioele</span>
      </header>

      <div className="card-event-copy">
        <span>Ti aspetto il</span>
        <strong>17 settembre 2026</strong>
      </div>

      <div className="card-actions" aria-label="Dettagli dell'evento">
        <span className="card-action">
          <span className="action-icon" aria-hidden="true">⌖</span>
          <strong>Location</strong>
          <small>Casa Modò</small>
        </span>

        <span className="card-action">
          <span className="action-icon" aria-hidden="true">✓</span>
          <strong>Conferma</strong>
          <small>su WhatsApp</small>
        </span>
      </div>

      <footer className="card-footer">
        <span>Parteciperai?</span>
      </footer>
    </article>
  )
}

export default InvitationCard
