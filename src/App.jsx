import { useState } from 'react'
import './App.css'

import PlatformReturnPill from './components/PlatformReturnPill'

import AgentQueue from './pages/AgentQueue'
import ActivityTimeline from './pages/ActivityTimeline'
import ApproverInbox from './pages/ApproverInbox'
import RequesterPortal from './pages/RequesterPortal'
import SettingsPage from './pages/SettingsPage'

export default function App() {
  const [view, setView] = useState('agent')

  function renderView() {
    if (view === 'timeline') {
      return <ActivityTimeline />
    }

    if (view === 'approver') {
      return <ApproverInbox />
    }

    if (view === 'requester') {
      return <RequesterPortal />
    }

    if (view === 'settings') {
      return <SettingsPage />
    }

    return <AgentQueue />
  }

  return (
    <>
      <PlatformReturnPill />

      <div className="view-switcher">

        <button onClick={() => setView('agent')}>
          Agent
        </button>

        <button onClick={() => setView('timeline')}>
          Timeline
        </button>

        <button onClick={() => setView('approver')}>
          Approver
        </button>

        <button onClick={() => setView('requester')}>
          Requester
        </button>

        <button onClick={() => setView('settings')}>
          Settings
        </button>

      </div>

      {renderView()}
    </>
  )
}