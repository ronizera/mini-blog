import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const mockPosts = [
    {id: 1, titulo: 'Primeiro post', conteudo: 'Conteúdo do primeiro post.'},
    {id: 2, titulo: 'Segundo post', conteudo: 'Conteúdo do segundo post.'},
];

export default function Post() {
    const {id} = useParams();
    const navigate = useNavigate();

    const post = mockPosts.find(p => p.id === Number(id));

    if (!post) {
        return <p>Post nao encontrado.</p>
    }

    return(
        <div>
            <h1 className="text-2xl font-bold mb-2">{post.titulo}</h1>
            <p className="mb-4">{post.conteudo}</p>
            <button onClick={() => navigate(-1)} className="text-blue-600 hover:underline">
                Voltar
            </button>
        </div>
    )
}