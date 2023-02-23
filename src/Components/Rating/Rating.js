import React from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({rating}) => {
    const stars=[]
    for(let i=0; i<5; i++){
        if(i<rating){
            stars.push(<FaStar key={i} ></FaStar>)
        }
    }
    return <div className='flex text-yellow-400'>
        {stars}
    </div>
};

export default Rating;