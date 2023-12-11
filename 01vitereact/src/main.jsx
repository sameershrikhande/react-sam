import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h2>Custom React App !!</h2>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit link!'
// }

const anotherUser = "SamJi!!"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  'click me for Google',
  anotherUser
)

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  reactElement,
  // </React.StrictMode>,
  // <App />
  // anotherElement
)
