import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app/App'

const appContainer = document.getElementById('app-root')
const root = createRoot(appContainer)
root.render(<App />)
