import React, { useContext } from 'react';
import './Card.css'
import RecommendationCard from './RecommendationCard/RecommendationCard';
import { useQuery } from '@tanstack/react-query';
import Loader from '../Loder/Loader';

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
        return <Loader/>;
     }

    return (
        <div className='pt-28'>
            <div className='text-center pb-10'>
                <h1 className='headerStyle xl:text-4xl lg:text-3xl font-medium pb-2'>RECOMMENDED FOR YOU</h1>
                <h3 className='headerStyle xl:text-2xl lg:text-xl font-medium '>Discover Your Next Favorite Look with Our Personalized Suggestions</h3>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-5 container mx-auto">
                {
                    recommendation.slice(0,15).map(products=> <RecommendationCard key={[products._id]} products={products}/>
                        )

                }
            </div>

        </div>

    );
};

export default Card;