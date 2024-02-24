import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createElement } from 'react'


const element = {
  type : 'a',
  props : {
      href: "https://google.com",
      target: "_blank"
  },
  children : "Visit google"
}

function MyApp(){
  const ji = "Hello, Kanishka ji"
  return(
  <><h1>Chai aur react {ji}</h1>
  </>)
}

const reactElement = (<a href='https://google.com' target='_blank'>Click me to visit google</a>)

const appy = "Hello jiiii"
const newReactElement = React.createElement(
  'a',
  {href:"https://youtube.com", target:"_blank"},
  "Click me to visit youtube",
  appy
)
ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
