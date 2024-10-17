import React from 'react'
import Background from './components/Background'
import Forground from './components/Forground'

const App = () => {
  return (
    <div className='bg-black h-screen w-full relative '>  
    <Background/>
    <Forground/>
        </div>
  )
}

export default App