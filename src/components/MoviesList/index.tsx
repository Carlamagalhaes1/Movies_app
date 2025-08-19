import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "../MovieCard";
import { Movie } from "../../types/movie";

interface MoviesListProps {
  searchQuery: string;
}

export default function MoviesList({ searchQuery }: MoviesListProps) {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie",
          {
            params: {
              api_key: import.meta.env.VITE_MOVIES_DB_API_KEY,
              language: "pt-BR",
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };

    getMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 p-4">
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
