const timelineEvents = [
  {
    id: 1,
    title: 'WO-3395 created',
    body: 'Water leak behind classroom sink was submitted by Cristina.',
    time: '3 weeks ago',
    type: 'created',
  },
  {
    id: 2,
    title: 'WO-3396 updated',
    body: 'Jesus changed status to Pending and added a response.',
    time: '4 days ago',
    type: 'updated',
  },
  {
    id: 3,
    title: 'R-237 routed',
    body: 'Approver created a maintenance work order from request R-237.',
    time: '2 days ago',
    type: 'routed',
  },
  {
    id: 4,
    title: 'WO-3398 assigned',
    body: 'HVAC request was assigned to Juan.',
    time: '1 day ago',
    type: 'assigned',
  },
  {
    id: 5,
    title: 'WO-3397 status changed',
    body: 'Status changed from Open to In Progress.',
    time: '8 hours ago',
    type: 'updated',
  },
]

export default function ActivityTimeline({ density }) {  return (
    <main className={`timeline-page density-${density}`}>      <section className="timeline-panel">
        <header className="timeline-header">
          <p>Operations Activity</p>
          <h1>Timeline</h1>
          <span>
            Live operational history for requests, assignments, comments and status changes.
          </span>
        </header>

        <section className="timeline-scroll-list">
          {timelineEvents.map((event) => (
            <article className="timeline-entry" key={event.id}>
              <div className={`timeline-dot ${event.type}`} />

              <div className="timeline-entry-main">
                <strong>{event.title}</strong>
                <p>{event.body}</p>
              </div>

              <span className="timeline-time">
                {event.time}
              </span>
            </article>
          ))}
        </section>
      </section>
    </main>
  )
}