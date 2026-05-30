import { demoRequests } from '../data/demoRequests'

export default function AgentQueue() {

  const openCount =
    demoRequests.filter((r) => r.status !== 'Closed').length

  const noResponse =
    demoRequests.filter((r) => !r.responded).length

  const assignedToMe =
    demoRequests.filter((r) => r.assigned === 'Juan').length

  return (
    <main className="queue-page">

      <section className="queue-summary">

        <div className="summary-card">
          <span>Open</span>
          <strong>{openCount}</strong>
        </div>

        <div className="summary-card">
          <span>Assigned To Me</span>
          <strong>{assignedToMe}</strong>
        </div>

        <div className="summary-card warning">
          <span>No Response</span>
          <strong>{noResponse}</strong>
        </div>

        <div className="summary-card">
          <span>Average Age</span>
          <strong>6.2 Days</strong>
        </div>

      </section>

      <section className="queue-controls">

        <div>

          <button>10</button>
          <button>25</button>
          <button>50</button>
          <button>100</button>

        </div>

        <input
          placeholder="Search work orders..."
        />

      </section>

      <section className="ticket-list">

        {demoRequests.map((ticket) => (

          <article
            className="ticket-row"
            key={ticket.id}
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

            </div>

            <div className="ticket-meta">

              <span>{ticket.requester}</span>

              <span>{ticket.site}</span>

              <span>{ticket.age}</span>

            </div>

            <select defaultValue={ticket.assigned}>
              <option>Unassigned</option>
              <option>Juan</option>
              <option>Jesus</option>
            </select>

            <select defaultValue={ticket.status}>
              <option>Open</option>
              <option>Pending</option>
              <option>In Progress</option>
              <option>Closed</option>
            </select>

            <button>

              {ticket.responded
                ? 'View'
                : 'Respond'}

            </button>

          </article>

        ))}

      </section>

    </main>
  )
}