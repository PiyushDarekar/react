import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let [counter,setCounter] = useState(15)

    const addValue=()=>{
        //console.log("In addValue function",Math.random())
        //console.log("In addValue function",counter)
        //if(counter<20){
            setCounter(prevCounter => prevCounter+1)
            setCounter(prevCounter => prevCounter+1)
            setCounter(prevCounter => prevCounter+1)
            setCounter(prevCounter => prevCounter+1)
        //}
    }
    const decreaseValue=()=>{
        //console.log("In decrease value function",Math.random())
        //console.log("In addValue function",counter)
        //if(counter>0){
            setCounter(counter-1)
        //}
    }
    return (
        <>
            <h1>Welocome to the Counter Application</h1>
            <h2>Counter Value: {counter}</h2>

            <button onClick={addValue}>Add Value {counter}</button><br/>
            <button onClick={decreaseValue}>Decrease Value {counter}</button>
            <p>footer: {counter}</p>
        </>
    )
}

export default App
