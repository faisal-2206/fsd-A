import React from 'react'
import { MovieList } from './MovieList'

const App = () => {
  return (
    <div>
      <h1 style={{
        backgroundColor:"black",
        textAlign:"center",
        fontSize:"40px",
        color:"white"
      }}
      
      >Netflix Clone App</h1>
      <MovieList/>
    </div>
  )
}

export default App