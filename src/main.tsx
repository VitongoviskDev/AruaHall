import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import './global.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error("Elemento #root não encontrado no DOM")
}

ReactDOM.createRoot(rootElement).render(
  <BrowserRouter basename="/AruaHall" >
    <App />
  </BrowserRouter>
)