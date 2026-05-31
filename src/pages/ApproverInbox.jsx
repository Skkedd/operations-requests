const pendingRequests = [
  {
    id: 'R-237',
    title: 'Desk leg loose in Room 8',
    requester: 'Cristina',
    site: 'Westbrook Elementary',
    age: '2 hours',
    body: 'Teacher reports a student desk leg is loose and may need tightening or replacement.',
  },
  {
    id: 'R-238',
    title: 'Projector remote missing',
    requester: 'Macy',
    site: 'North Campus',
    age: '5 hours',
    body: 'Room cannot control projector volume or input source without the remote.',
  },
  {
    id: 'R-239',
    title: 'Trash can needed for event',
    requester: 'Jeff',
    site: 'District Office',
    age: '1 day',
    body: 'Staff meeting needs extra trash cans near the multipurpose room.',
  },
]

export default function ApproverInbox({ density }) {  return (
    <main className={`approver-page density-${density}`}>      <section className="approver-header">
        <p>Site Review</p>
        <h1>Approver Inbox</h1>
        <span>
          Review incoming requests before they become work orders or local tasks.
        </span>
      </section>

      <section className="approver-summary">
        <div>
          <span>Pending Review</span>
          <strong>12</strong>
        </div>

        <div>
          <span>Routed Today</span>
          <strong>5</strong>
        </div>

        <div>
          <span>Returned</span>
          <strong>2</strong>
        </div>

        <div>
          <span>Local Tasks</span>
          <strong>4</strong>
        </div>
      </section>

      <section className="approver-list">
        {pendingRequests.map((request) => (
          <article className="approver-row" key={request.id}>
            <div className="approver-id">
              {request.id}
            </div>

            <div className="approver-main">
              <strong>{request.title}</strong>
              <p>{request.body}</p>
            </div>

            <div className="approver-meta">
              <span>{request.requester}</span>
              <span>{request.site}</span>
              <span>{request.age}</span>
            </div>

            <div className="approver-actions">
              <button>Create Work Order</button>
              <button>Assign Local Task</button>
              <button>Return</button>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}