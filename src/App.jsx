import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div>
      <nav>
        <Link className="" to= "/">Home</Link>
        <Link className='' to= "/new">Novo Post</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <
      </Routes>
    </div>
  )
}

export default App
