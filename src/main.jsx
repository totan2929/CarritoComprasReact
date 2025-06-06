import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CarritoComprasApp from './CarritoComprasApp'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <CarritoComprasApp />
  </StrictMode>
  </BrowserRouter>,
)
