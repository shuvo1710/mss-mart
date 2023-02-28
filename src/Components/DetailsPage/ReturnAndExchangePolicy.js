import React from 'react';

const ReturnAndExchangePolicy = ({returns}) => {
    if(returns.length){
        return (
            <div className='text-justify height'>
           <p className='text-xs md:text-md lg:text-lg'>{returns}</p>
            
        </div>
        );
    }
};

export default ReturnAndExchangePolicy;