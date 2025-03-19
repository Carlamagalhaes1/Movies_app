import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "../MovieCard";
import { Movie } from "../../types/movie";



export default function MoviesList() {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const getMovies = async () => {
            
            try {
                const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
                    params: {
                        api_key: '735a8304282425711393619bb50c4fb8',
                        language: 'pt-BR',
                    },
                });
                
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
                {movies.map((movie) => 
                <MovieCard key={movie.id} movie={movie}/>

                    
                )}
            </ul>
        </div>
    );
}
