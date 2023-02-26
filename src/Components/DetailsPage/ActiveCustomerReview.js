import React from 'react';

const ActiveCustomerReview = ({active}) => {
    if(active.length){
        return (
            <div className='text-justify height'>
           <p>{active}</p>
            
        </div>
        );
    }
};

export default ActiveCustomerReview;