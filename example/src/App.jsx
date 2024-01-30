import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Headind from './assets/components/Headind';
import Inputdata from './assets/components/Inputdata';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Headind/>
      <Inputdata/>
    
    </>
  )
}

export default App
