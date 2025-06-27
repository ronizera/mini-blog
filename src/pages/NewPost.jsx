import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewPost() {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [imagem, setImagem] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novoPost = {
      titulo,
      conteudo,
      imagem
    };

    try {
      await fetch('http://localhost:3001/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoPost)
      });
      navigate('/');
    } catch (error) {
      console.error('Erro ao criar post:', error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">Novo Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="border rounded p-2"
          required
        />
        <textarea
          placeholder="Conteúdo"
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
          className="border rounded p-2 h-32"
          required
        />
        <input
          type="text"
          placeholder="URL da Imagem (opcional)"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
          className="border rounded p-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Publicar
        </button>
      </form>
    </div>
  );
}
