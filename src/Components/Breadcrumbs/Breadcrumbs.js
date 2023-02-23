import React from 'react';

const Breadcrumbs = () => {
    return (
        <div className='container mx-auto'>
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Documents</a></li>
                    <li>Add Document</li>
                </ul>
            </div>
        </div>
    );
};

export default Breadcrumbs;