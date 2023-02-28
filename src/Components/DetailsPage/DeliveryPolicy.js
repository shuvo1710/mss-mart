import React from 'react';

const DeliveryPolicy = ({delivery}) => {
    console.log(delivery)
    if(delivery?.length){
        return (
            <div className='text-justify height'>
           <p className='text-xs md:text-md lg:text-lg'>{delivery}</p>
            
        </div>
        );
    }
};

export default DeliveryPolicy;