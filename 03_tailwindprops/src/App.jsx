import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "SamJi",
    age: "100"
  }
  let myArr = [1, 2, 3, 4, 5]
  return (
    <>
      <h1 className= 'bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test | Sam</h1>
      <Card username="SamJi" linkText="Visit Me" someObj={myObj} anotherObj={myArr}/> 
      <br /><br />
      <Card username="Sameer"/>
    </>
  )
}

export default App
