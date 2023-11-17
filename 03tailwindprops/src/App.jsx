import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    name:"Piyush",
    age:24
  }
  let arr=[1,2,3,4,5]

  return (
    <>
        <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>TailWind Test</h1> 
        <Card username="Piyush D" btnText="Click here"/>
        <Card username="Chetan D" btnText="Visit our page"/>
        <Card/>
    </>
  )
}

export default App
