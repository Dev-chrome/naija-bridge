import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PollarProvider } from '@pollar/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <PollarProvider
    client={{
  apiKey: import.meta.env.VITE_POLLAR_API_KEY,
}}
  >
    <App />
  </PollarProvider>
</StrictMode>,
)
