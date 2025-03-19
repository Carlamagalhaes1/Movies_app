
import { FaRegStar, FaStar } from 'react-icons/fa';

export interface Props {
    rating: number

}


export default function StarRating(props: Props) {

    const numStar = Math.round(props.rating / 2)
    const fullStars = [0, 1, 2];
    const emptyStars = [3, 4];


    for ( let i = 0; i < 5; i++) {
        if (i  < numStar) {
            fullStars.push(i);
        } else {
            emptyStars.push(i)
        }
    }
    return(
        <div>
            {fullStars.map(index =>  <FaStar key={index}/> )}
           
            <FaRegStar/>
            
        </div>
        

    );
}