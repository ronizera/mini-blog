import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// Corrigido o caminho de importação adicionando a extensão .jsx
import Home from './pages/Home.jsx';
import NewPost from './pages/NewPost.jsx';

export default function App() {
  return (
    // Removido o <Router> daqui, pois já está no index.js
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-3xl mx-auto py-10 px-4">
        <nav className="mb-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Mini Blog</h1>
          <Link
            to="/new"
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors duration-200"
          >
            Novo Post
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home key={window.location.pathname} />} />
          <Route path="/new" element={<NewPost />} />
          {/* Futuramente: rota para post individual */}
        </Routes>
      </div>
    </div>
  );
}