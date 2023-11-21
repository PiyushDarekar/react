import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import { useCurrencyInfo } from './hooks/useCurrencyInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1 className='text-3xl bg-orange-500'>Currency Convertor App</h1> 
    </>
  )
}

export default App
