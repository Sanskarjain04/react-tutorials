import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../src/components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl drop-shadow-lg'>Tailwind test</h1>
      <Card username="sanskar"/>
      <Card username="Prince"/>
    </>
  )
}

export default App
