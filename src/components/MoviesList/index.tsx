import axios from "axios";
import { useState, useEffect } from "react";

interface Movie {
    id: number;
    title: string;
    
  }

export default function MoviesList() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        // Função assíncrona para pegar filmes
        const getMovies = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
                    params: {
                        api_key: '735a8304282425711393619bb50c4fb8',
                        language: 'pt-BR',
                    },
                });
                setMovies(response.data.results); // Armazena os filmes no estado
            } catch (error) {
                console.error('Erro ao buscar filmes:', error);
            }
        };

        getMovies(); // Chama a função para obter filmes
    }, []); // O array vazio garante que o efeito seja executado apenas uma vez quando o componente for montado.

    return (
        <div className="mt-4">
            <ul>
                {movies.map((movie: Movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
}
