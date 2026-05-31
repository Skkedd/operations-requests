export default function TicketDrawer({ ticket, onClose }) {
  if (!ticket) {
    return null
  }

  return (
    <aside className="ticket-drawer">
      <div className="drawer-header">
        <div>
          <span className="drawer-label">{ticket.id}</span>
          <h2>{ticket.title}</h2>
        </div>

        <button
          className="drawer-close"
          type="button"
          onClick={onClose}
        >
          ×
        </button>
      </div>

      {!ticket.responded && (
        <div className="first-response-alert">
          No first response has been sent.
        </div>
      )}

      <div className="drawer-grid">
        <div>
          <span>Requester</span>
          <strong>{ticket.requester}</strong>
          <small>{ticket.requesterEmail}</small>
        </div>

        <div>
          <span>Site</span>
          <strong>{ticket.site}</strong>
        </div>

        <div>
          <span>Assigned</span>
          <strong>{ticket.assigned}</strong>
        </div>

        <div>
          <span>Status</span>
          <strong>{ticket.status}</strong>
        </div>

        <div>
          <span>Priority</span>
          <strong>{ticket.priority}</strong>
        </div>

        <div>
          <span>Age</span>
          <strong>{ticket.age}</strong>
        </div>
      </div>

      <section className="drawer-section">
        <h3>Description</h3>
        <p>{ticket.body}</p>
      </section>

      <section className="drawer-section">
        <h3>Activity</h3>

        <div className="drawer-timeline">
          <div>
            <strong>Request created</strong>
            <span>{ticket.age} ago</span>
          </div>

          <div>
            <strong>Assigned to {ticket.assigned}</strong>
            <span>System demo event</span>
          </div>

          {!ticket.responded && (
            <div>
              <strong>Waiting for first response</strong>
              <span>Needs agent acknowledgement</span>
            </div>
          )}
        </div>
      </section>

      <section className="drawer-section">
        <h3>Quick Actions</h3>

        <div className="drawer-actions">
          <button type="button">Send Response</button>
          <button type="button">Add Note</button>
          <button type="button">Ask Supervisor</button>
          <button type="button">Close Ticket</button>
        </div>
      </section>
    </aside>
  )
}