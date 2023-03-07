import React from 'react';
import './Card.css'

import Loder from '../Loder/Loder';
import RecommendationCard from './RecommendationCard/RecommendationCard';
import { useQuery } from '@tanstack/react-query';
const Card = () => {
    const {data:recommendation = [], isLoading} = useQuery({
        queryKey: ['recommendation'],
        queryFn: async ()=>{
            const res = await fetch('http://localhost:5000/allProducts?category=man')
            const data = await res.json()
            return data;
        }
    })
     if(isLoading){
        return <Loder/>;
     }

    return (
        <div className='py-20'>
            <div className='text-center my-10'>
                <h1 className='headerStyle text-4xl font-medium py-4'>RECOMMENDED FOR YOU</h1>
                <h3 className='text-2xl font-medium headerStyle'>Discover Your Next Favorite Look with Our Personalized Suggestions</h3>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-2  container mx-auto my-4">
                {
                    recommendation?.map(products=> <RecommendationCard key={[products._id]} products={products}/>)
                }
            </div>

        </div>

    );
};

export default Card;