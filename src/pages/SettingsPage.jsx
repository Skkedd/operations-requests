export default function SettingsPage({ density, setDensity }) {
  return (
    <main className="settings-page">
      <section className="settings-header">
        <p>Operations Requests Settings</p>
        <h1>Module Preferences</h1>
        <span>
          These settings are temporary UI hooks for the MVP. Later they will save per user or per organization.
        </span>
      </section>

      <section className="settings-panel">
        <div>
          <h2>Queue Density</h2>
          <p>
            Controls how much vertical space each work order row uses.
          </p>
        </div>

        <div className="density-options">
          <button
            className={density === 'comfortable' ? 'active' : ''}
            onClick={() => setDensity('comfortable')}
          >
            Comfortable
          </button>

          <button
            className={density === 'compact' ? 'active' : ''}
            onClick={() => setDensity('compact')}
          >
            Compact
          </button>

          <button
            className={density === 'dense' ? 'active' : ''}
            onClick={() => setDensity('dense')}
          >
            Dense
          </button>
        </div>
      </section>
    </main>
  )
}