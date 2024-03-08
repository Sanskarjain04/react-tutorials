import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(5);
  let addValue = () => {
    if(counter<20){
      console.log("value added");
      counter=counter + 1;
      setCounter(counter);
    }else{
      console.log("counter cannot increment further")
    }
  }
  let removeValue = () => {
    if(counter>0){
      console.log("value removed");
      counter=counter - 1;
      setCounter(counter);
    }else{
      console.log("cannot decrement further")
    }
  }

  return (
    <>
      <h1>Hello this is sanskar</h1>
      <h2>Counter: {counter}</h2>
      <br />
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
