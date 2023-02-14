import React from 'react';
import "./Loder.css"
import loder from "../../resource/loder/Spinner-1s-200px.gif"

const Loder = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <img src={loder} alt='' />
            </div>
        </div>
    );
};

export default Loder;