import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from '@/app/App'
import '@/app/styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById('root'),
  undefined
)
