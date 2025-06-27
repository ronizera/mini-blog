import React from "react";
import { Link } from "react-router-dom";

const mockPosts = [
    {id: 1, titulo: 'Primeiro post', conteudo: 'Conteúdo do primeiro post'},
    {id: 2, titulo: 'Segundo post', conteudo: 'Conteúdo do segundo post'},
];

export default function Home() {
    return(
        <div>
            <h1 className="text-2xl font-bold mb-4">Posts</h1>
            <ul>
                {mockPosts.map(post => (
                    <li key={post.id} className="mb-3">

                        <Link to={`/posts/${post.id}`} className="text-blue-600 hover:underline">
                            {post.titulo}
                        </Link>
                        <p>{post.conteudo.substring(0,50)}...</p>

                    </li>
                ))}
            </ul>
        </div>
    )
}