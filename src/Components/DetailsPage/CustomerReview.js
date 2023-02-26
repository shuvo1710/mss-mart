import React from 'react';

const CustomerReview = ({customer}) => {
    if(customer.length){
        return (
            <div className='text-justify height'>
           <p>{customer}</p>
            
        </div>
        );
    }
};

export default CustomerReview;