import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'

function App() {


  return (
    <>
      <h1>Redux Tookit</h1>
      <addTodo />
      <Todos/>
    </>
  )
}

export default App
