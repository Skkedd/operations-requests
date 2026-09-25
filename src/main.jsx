import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { FleetEntryGate } from './foundation/react.jsx'
import { supabase } from './lib/supabaseClient.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FleetEntryGate client={supabase} moduleKey="requests"><App /></FleetEntryGate>
  </StrictMode>,
)
