import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div>
        <div>Designing for clarity and purpose <br/> 
        Creating solutions for everyday problems<br/>
        Building in ☀️ San Jose</div>
      </div>
    </>
  )
}

export default App
