const requests = [
  {
    id: 'R-557',
    title: 'Projector not turning on',
    status: 'Assigned to Juan',
    body:
      'Projector powers on briefly then shuts off after about 30 seconds.',
    updated: '2 hours ago',
  },
  {
    id: 'R-558',
    title: 'Need extra tables for event',
    status: 'Pending Approval',
    body:
      'Requesting six folding tables for Thursday evening.',
    updated: 'Yesterday',
  },
  {
    id: 'R-559',
    title: 'Broken chair',
    status: 'Completed',
    body:
      'Chair in Room 18 appears unstable.',
    updated: '3 days ago',
  },
]

export default function RequesterPortal({ density, setDensity }) {
  return (
    <main className={`requester-page density-${density}`}>

      <section className="requester-header">

        <p>Your Requests</p>

        <h1>
          Request Portal
        </h1>

        <span>
          Track your requests, communicate with staff and see updates.
        </span>

        <div className="requester-controls">

          <div className="requester-control">

            <label>
              Density
            </label>

            <select
              value={density}
              onChange={(e) => setDensity(e.target.value)}
            >
              <option value="comfortable">
                Comfortable
              </option>

              <option value="compact">
                Compact
              </option>

              <option value="dense">
                Dense
              </option>

            </select>

          </div>

          <div className="requester-control">

            <label>
              Sort
            </label>

            <select defaultValue="updated">

              <option value="updated">
                Recently Updated
              </option>

              <option value="newest">
                Newest
              </option>

              <option value="oldest">
                Oldest
              </option>

              <option value="status">
                Status
              </option>

            </select>

          </div>

        </div>

        

      </section>

      <section className="requester-summary">

        <div>
          <span>Open</span>
          <strong>2</strong>
        </div>

        <div>
          <span>Completed</span>
          <strong>14</strong>
        </div>

        <div>
          <span>Waiting</span>
          <strong>1</strong>
        </div>

      </section>

      <section className="request-list">

        {requests.map((request) => (

          <article
            key={request.id}
            className="request-row"
          >

            <div className="request-id">
              {request.id}
            </div>

            <div className="request-main">

              <strong>
                {request.title}
              </strong>

              <p>
                {request.body}
              </p>

            </div>

            <div className="request-status">

              <span>
                {request.status}
              </span>

              <small>
                Updated {request.updated}
              </small>

            </div>

            <div className="request-actions">

              <button>
                View
              </button>

              <button>
                Message
              </button>

            </div>

          </article>

        ))}

      </section>

    </main>
  )
}