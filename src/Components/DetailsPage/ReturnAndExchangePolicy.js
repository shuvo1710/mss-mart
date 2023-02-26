import React from 'react';

const ReturnAndExchangePolicy = ({returns}) => {
    if(returns.length){
        return (
            <div className='text-justify height'>
           <p>{returns}</p>
            
        </div>
        );
    }
};

export default ReturnAndExchangePolicy;