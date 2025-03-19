import axios from "axios";
import { useState, useEffect } from "react";

interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;


}

export default function MoviesList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            
            try {
                const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
                    params: {
                        api_key: '735a8304282425711393619bb50c4fb8',
                        language: 'pt-BR',
                    },
                });
                console.log(response.data)
                setMovies(response.data.results);
            } catch (error) {
                console.error('Erro ao buscar filmes:', error);
            }
            
        };

        getMovies();
    }, []);

    return (
        <div className="mt-4">
            <ul>
                {movies.map((movie: Movie) => (
                    <li className="text-amber-50" key={movie.id}><p className="text-2xl
                    ">
                        {movie.title}</p>
                        <p className="text-cyan-400">{movie.overview}</p>
                        
                            <img className=""
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={`Poster de ${movie.title}`}
                            />
                        <p>{movie.vote_average}</p>
                      
                    </li>
                ))}
            </ul>
        </div>
    );
}
