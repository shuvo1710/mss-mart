import React from 'react';

const CustomerReview = ({customer}) => {
    if(customer.length){
        return (
            <div className='text-justify height'>
           <p className='text-xs md:text-md lg:text-lg'>{customer}</p>
            
        </div>
        );
    }
};

export default CustomerReview;