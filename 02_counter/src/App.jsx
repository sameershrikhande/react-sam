import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 10

  let [counter, setCounter] = useState(10)

  const addValue = () => {
    // console.log("Clicked", counter);
    // counter = counter + 1
    // if(counter < 15){
      // Also accepts a call back
      setCounter(counter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      // setCounter(counter + 1)
      setCounter(prevCounter => prevCounter + 1)
    // }
  }

  const removeValue = () => {
    // if(counter > 0)
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br /><br />
      <button
      onClick={removeValue}
      >Decrease Value</button>
      <p>hello: {counter}</p>
    </>
  )
}

export default App
