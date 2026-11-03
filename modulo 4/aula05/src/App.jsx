import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Button from './Button'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Button>Salvar</Button>

    <Button>Cancelar</Button>

    <Button>Enviar</Button>

    </>
  )
}

export default App

