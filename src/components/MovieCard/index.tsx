import { Movie } from "../../types"


export interface Props {
    movie: Movie
}




export default function MovieCard(props: Props) {

    const movie = props.movie


    return (

        <li className="text-amber-50" >
            <div className="">
                <img className=""
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={`Poster de ${movie.title}`}
                />
            </div>
            <div className="">
                 <p className="text-2xl">{movie.title}</p>
             <div className="">
                 <p className="text-cyan-400">{movie.overview}</p>
             </div>

            </div>
            <p className="text-2xl">{movie.title}</p>
            


        </li>



    )
}