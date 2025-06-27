import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    fetch('http://localhost:3001/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error('Erro ao buscar posts:', err));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const deletarPost = async (id) => {
    const confirmar = window.confirm('Tem certeza que deseja excluir este post?');
    if (!confirmar) return;

    try {
      await fetch(`http://localhost:3001/posts/${id}`, {
        method: 'DELETE'
      });
      fetchPosts(); // Atualiza lista depois de deletar
    } catch (err) {
      console.error('Erro ao deletar post:', err);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {posts.length === 0 ? (
        <p>Nenhum post ainda.</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li
              key={post.id}
              className="mb-6 p-4 border rounded shadow-sm bg-white"
            >
              {post.imagem && (
                <img
                  src={post.imagem}
                  alt={post.titulo}
                  className="mb-2 rounded max-h-60 object-cover w-full"
                />
              )}
              <Link
                to={`/posts/${post.id}`}
                className="text-xl font-bold text-blue-600 hover:underline"
              >
                {post.titulo}
              </Link>
              <p className="text-gray-700">{post.conteudo.substring(0, 80)}...</p>
              <button
                onClick={() => deletarPost(post.id)}
                className="mt-2 text-sm text-red-500 hover:underline"
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
