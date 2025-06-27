import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPost() {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Novo post:", { titulo, conteudo });

    navigate("/");
  }

  return (
    <div>
      <h1>Criar Novo Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg">
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="border p-2 rounded"
          required
        />

        <textarea
          placeholder="Conteúdo"
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
          className="border p-2 rounded h-32"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Criar Post
        </button>
      </form>
    </div>
  );
}
