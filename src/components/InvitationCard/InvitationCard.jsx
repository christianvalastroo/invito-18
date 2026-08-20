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
        <span>ore 20:00</span>
      </div>

      <div className="card-actions" aria-label="Dettagli dell'evento">
        <a
          className="card-action"
          href="https://www.google.com/maps/search/?api=1&query=Casa+Mod%C3%B2+Eventi+in+Stile%2C+Via+Madonna+della+Libert%C3%A0%2C+SS+114+Orientale+Sicula+13%2C+95018+Riposto+CT"
          target="_blank"
          rel="noreferrer"
          aria-label="Apri Casa Modò su Google Maps"
        >
          <span className="action-icon" aria-hidden="true">⌖</span>
          <strong>Location</strong>
          <small>Casa Modò</small>
        </a>

        <a
          className="card-action"
          href="https://wa.me/393713545858?text=Ciao%2C%20confermo%20la%20mia%20partecipazione%20al%2018%C2%B0%20compleanno%20di%20Gioele%20del%2017%20settembre%202026%20alle%20ore%2020%3A00."
          target="_blank"
          rel="noreferrer"
          aria-label="Conferma la partecipazione su WhatsApp"
        >
          <span className="action-icon" aria-hidden="true">✓</span>
          <strong>Conferma</strong>
          <small>su WhatsApp</small>
        </a>
      </div>

      <footer className="card-footer">
        <span>Parteciperai?</span>
        <small>Si prega di dare conferma entro il 5 settembre</small>
      </footer>
    </article>
  )
}

export default InvitationCard
