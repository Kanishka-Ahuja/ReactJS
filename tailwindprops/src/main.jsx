import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './Card.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Card channel="Chai aur code" btntext='click me'/>
    <Card channel="Kanishka Ahuja" btntext = "Visit me"/>
  </React.StrictMode>,
)
