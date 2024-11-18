import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' 
import Marks from './Marks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Marks/>
  </StrictMode>,
)
