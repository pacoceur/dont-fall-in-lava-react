import React from 'react'
import World from './features/world'

const App = () => {
  return (
    <div>
      <h1 className="title">Don't Fall in Lava | The Game</h1>
      <h2 className="subtitle">Got ya! You can't fall in lava... Use your keyboard arrows to move</h2>
      <World />
    </div>
  )
}

export default App