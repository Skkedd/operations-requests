import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { FleetEntryGate } from './foundation/react.jsx'
import { supabase } from './lib/supabaseClient.js'
import { requestsManifest } from './fleetManifest.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FleetEntryGate client={supabase} assignmentMode={import.meta.env.VITE_BACKEND_AUTH_V2 === 'true' ? 'explicit' : 'compatibility'} moduleKey={requestsManifest.key}><App /></FleetEntryGate>
  </StrictMode>,
)
