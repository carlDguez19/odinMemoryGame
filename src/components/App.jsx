import { useState } from 'react'
import { Gameboard } from './Gameboard'
// import viteLogo from '/vite.svg'
// import './App.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="memoryGame">
      <Gameboard/>
    </div>
  )
}
