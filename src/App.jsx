import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { Cell } from './Cell'
import { spaceBoard, imageNames } from './Constants'
import { CreateBoard } from './CreateBoard'



function App() {
  //const [counterFlip, setCounterFli] = useState();
  console.log("Names of Images: " + imageNames)
  const board = CreateBoard(spaceBoard)
  
  return (
    <>
      <div className='board'>
         {board}
        
      </div>

    </>
  )
}

export default App
