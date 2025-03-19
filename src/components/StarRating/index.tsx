
import { FaRegStar, FaStar } from 'react-icons/fa';

export interface Props {
    rating: number

}


export default function StarRating(props: Props) {

    const numStar = Math.round(props.rating / 2)
    const fullStars = [];
    const emptyStars = [];


    for ( let i = 0; i < 5; i++) {
        if (i  < numStar) {
            fullStars.push(i);
        } else {
            emptyStars.push(i)
        }
    }
    return(
        <div className='flex gap-1 '>
            {fullStars.map(index =>  <FaStar key={index} className='text-amber-300'/> )}
            {emptyStars.map(index =>  <FaRegStar key={index} className='text-amber-300'/> )}

           
            <FaRegStar/>
            
        </div>
        

    );
}