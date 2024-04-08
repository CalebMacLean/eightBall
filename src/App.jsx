import { useState } from 'react'
import EightBall, { answers } from './EightBall'
import './App.css'

function App() {
  

  return (
    <>
      <EightBall answers={answers}/>
    </>
  )
}

export default App
