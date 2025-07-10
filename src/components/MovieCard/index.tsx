import { Movie } from "../../types/movie"
import StarRating from "../StarRating"


export interface Props {
    movie: Movie
}




export default function MovieCard(props: Props) {

    const movie = props.movie


    return (

        <li className="list-none mt-4" >
            <div className="w-full h-[600px] rounded-lg overflow-hidden ">
                <img className="w-full h-full object-cover"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={`Poster de ${movie.title}`}
                />
            </div>
            <div className="p-2">
                 <p className=" text-2xl text-white">{movie.title}</p>
                 <StarRating rating={movie.vote_average}/>
             <div className="mt-2">
                 <p className="text-amber-200 line-clamp-3">{movie.overview}</p>
                 <button className="text-white mt-2 border-b-1 border-whit italic">ver mais</button>
             </div>

            </div>
            
            


        </li>



    )
}