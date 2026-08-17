import './InvitationCard.css'

function InvitationCard() {
  return (
    <span className="invitation-card">
      <span className="card-kicker">Sei invitato al</span>
      <strong className="card-age">18°</strong>
      <span className="card-name">Gioele Caudo</span>
      <span className="card-divider" />
      <span className="card-date">17 settembre 2026</span>
    </span>
  )
}

export default InvitationCard
