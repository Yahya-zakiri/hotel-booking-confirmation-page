import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import AsideLogo from './components/ui/AsideLogo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AsideLogo />
    </>
  )
}

export default App
