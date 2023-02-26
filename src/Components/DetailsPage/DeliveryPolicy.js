import React from 'react';

const DeliveryPolicy = ({delivery}) => {
    console.log(delivery)
    if(delivery?.length){
        return (
            <div className='text-justify height'>
           <p>{delivery}</p>
            
        </div>
        );
    }
};

export default DeliveryPolicy;