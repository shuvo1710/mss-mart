import React from 'react';

const ActiveCustomerReview = ({active}) => {
    if(active.length){
        return (
            <div className='text-justify height'>
           <p className="text-xs md:text-md lg:text-lg">{active}</p>
            
        </div>
        );
    }
};

export default ActiveCustomerReview;