import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/component/Navbar'
import Contactheader from './assets/component/Contactheader'
import Contactdata from './assets/component/Contactdata'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Contactheader/>
      <Contactdata/>
    </>
  )
}

export default App
