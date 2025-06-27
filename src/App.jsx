import Home from './pages/Home';
import Post from './pages/Post';
import NewPost from './pages/NewPost';
import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className='max-w-3x1 mx-auto p-4'>
      <nav className='mb-6'>
        <Link className=" mr-4 text-blue-600" to= "/">Home</Link>
        <Link className="text-blue-600" to= "/new">Novo Post</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/new" element={<NewPost />} />
      </Routes>
    </div>
  );
}

export default App
