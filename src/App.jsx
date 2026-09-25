import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Footer from './Footer.jsx'
import Header from './Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <Footer />
    </>
  )
}

export default App
