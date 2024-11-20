import React from 'react'
import MemoryBoard from './components/MemoryBoard'
import './App.css';
const App = () => {
  return (
    <>
      <div className='heading'> <h1> Memory Game </h1></div>
      <div>
        <MemoryBoard />
      </div>
    </>
    
  )
}

export default App
