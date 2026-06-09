import { useEffect, useState } from 'react'
import './PlatformReturnPill.css'

const THEME_STORAGE_KEY = 'dsc-theme'

function getInitialTheme() {
  try {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY)

    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme
    }
  } catch {
    // Local storage is convenience only.
  }

  return document.body.classList.contains('dsc-theme-light') ? 'light' : 'dark'
}

function applyTheme(theme) {
  document.body.classList.remove('dsc-theme-light', 'dsc-theme-dark')
  document.body.classList.add(`dsc-theme-${theme}`)

  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // Local storage is convenience only.
  }
}

export default function PlatformReturnPill({ onSignOut }) {
  const [isOpen, setIsOpen] = useState(true)
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    const collapseTimer = setTimeout(() => {
      setIsOpen(false)
    }, 1600)

    return () => clearTimeout(collapseTimer)
  }, [])

  function openPill() {
    setIsOpen(true)
  }

  function closePill() {
    setIsOpen(false)
  }

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === 'dark' ? 'light' : 'dark',
    )
  }

  async function handleSignOut() {
    if (onSignOut) {
      await onSignOut()
      return
    }

    window.location.href = '/logout'
  }

  return (
    <div
      className={`platform-return-pill ${isOpen ? 'open' : 'collapsed'}`}
      onMouseEnter={openPill}
      onMouseLeave={closePill}
      onFocus={openPill}
    >
      <button
        type="button"
        className="platform-return-handle"
        aria-label="Open platform controls"
        onClick={openPill}
      >
        ◀
      </button>

      <div className="platform-return-actions">
        <button
          type="button"
          className="platform-return-button"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>

        <button
          type="button"
          className="platform-return-button"
          onClick={() => {
            window.location.href = 'https://app.deepsitecontrol.com/launcher'
          }}
        >
          Launcher
        </button>

        <button
          type="button"
          className="platform-return-button signout"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  )
}