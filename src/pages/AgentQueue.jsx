import { useState } from 'react'
import { demoRequests } from '../data/demoRequests'
import TicketDrawer from '../components/TicketDrawer'

export default function AgentQueue({ density }) {
  const [selectedTicketId, setSelectedTicketId] = useState(null)
  const [search, setSearch] = useState('')
  const visibleRequests = demoRequests.filter((ticket) =>
    [ticket.id, ticket.title, ticket.site, ticket.requester].some((value) =>
      value.toLowerCase().includes(search.trim().toLowerCase())))
  const averageAgeDays = demoRequests.reduce((total, request) => {
    const [number, unit] = request.age.split(' ')
    return total + Number(number) * (unit.startsWith('week') ? 7 : 1)
  }, 0) / demoRequests.length

  const openCount =
    demoRequests.filter((r) => r.status !== 'Closed').length

  const noResponse =
    demoRequests.filter((r) => !r.responded).length

  const assignedToMe =
    demoRequests.filter((r) => r.assigned === 'Juan').length

  function toggleTicket(ticketId) {
    setSelectedTicketId((currentId) =>
      currentId === ticketId ? null : ticketId
    )
  }

  return (
    <main className={`queue-page density-${density}`}>
      <p role="status">Prototype queue with sample requests. Changes here are not saved or shared across the fleet.</p>
      <section className="queue-summary">
        <div className="summary-card">
          <span>Open</span>
          <strong>{openCount}</strong>
        </div>

        <div className="summary-card">
          <span>Assigned to Juan (sample)</span>
          <strong>{assignedToMe}</strong>
        </div>

        <div className="summary-card warning">
          <span>No Response</span>
          <strong>{noResponse}</strong>
        </div>

        <div className="summary-card">
          <span>Average sample age</span>
          <strong>{averageAgeDays.toFixed(1)} Days</strong>
        </div>
      </section>

      <section className="queue-controls">
        <input aria-label="Search sample requests" placeholder="Search sample requests..."
          value={search} onChange={(event) => setSearch(event.target.value)} />
      </section>

      <section className="ticket-list">
        {visibleRequests.length === 0 && <p>No sample requests match your search.</p>}
        {visibleRequests.map((ticket) => {
          const isSelected = selectedTicketId === ticket.id

          return (
            <div className="ticket-group" key={ticket.id}>
              <article
                className={`ticket-row ${isSelected ? 'selected' : ''}`}
                onClick={() => toggleTicket(ticket.id)}
              >
                <div className="ticket-id">
                  {ticket.id}
                </div>

                <div className="ticket-main">
                  <strong>
                    {ticket.title}
                  </strong>

                  <div className="ticket-body">
                    {ticket.body}
                  </div>

                  <div className="ticket-inline-actions">
                    <select
                      defaultValue={ticket.priority}
                      disabled title="Sample request; editing is unavailable"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                      <option>Urgent</option>
                    </select>

                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation()
                        toggleTicket(ticket.id)
                      }}
                    >
                      {ticket.responded ? 'View' : 'Respond'}
                    </button>
                  </div>
                </div>

                <div className="ticket-meta">
                  <span>{ticket.requester}</span>
                  <span>{ticket.age}</span>

                  {!ticket.responded && (
                    <span className="needs-response-badge">
                      First Response Needed
                    </span>
                  )}
                </div>

                <select
                  defaultValue={ticket.site}
                  disabled title="Sample request; editing is unavailable"
                  onClick={(event) => event.stopPropagation()}
                >
                  <option>Wright Elementary</option>
                  <option>JX Wilson</option>
                  <option>RL Stevens</option>
                  <option>District Office</option>
                </select>

                <select
                  defaultValue={ticket.assigned}
                  disabled title="Sample request; editing is unavailable"
                  onClick={(event) => event.stopPropagation()}
                >
                  <option>Unassigned</option>
                  <option>Juan</option>
                  <option>Jesus</option>
                </select>

                <select
                  defaultValue={ticket.status}
                  disabled title="Sample request; editing is unavailable"
                  onClick={(event) => event.stopPropagation()}
                >
                  <option>Open</option>
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Closed</option>
                </select>
              </article>

              {isSelected && (
                <TicketDrawer
                  ticket={ticket}
                  onClose={() => setSelectedTicketId(null)}
                />
              )}
            </div>
          )
        })}
      </section>

      <section className="queue-pagination">
        <span>Showing {visibleRequests.length} of {demoRequests.length} sample requests</span>
      </section>
    </main>
  )
}
