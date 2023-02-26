import React from 'react';
import { Link } from 'react-router-dom';

const MainBlogDesign = ({ blog }) => {
    const { img, description, name, title, _id } = blog
    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
                src={img}
                className="object-cover w-full h-64 "
                alt=""
            />
            <div className="p-5 border border-t-0">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <a
                        href="/"
                        className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                        aria-label="Category"
                        title="traveling"
                    >
                        {name}
                    </a>

                </p>
                <a
                    href="/"
                    aria-label="Category"
                    title="Visit the East"
                    className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                    {title.slice(0.20)}
                </a>
                <p className="mb-2 text-gray-700">
                    {description.slice(0, 150)}
                </p>

                <div className='flex  justify-between'>
                    <button className='shadow-md p-2'> <Link to={`/blogdetails/${_id} `}   >Details</Link> </button>
                    <button className='shadow-md  p-2'> <Link to='/allblog'>See more</Link> </button>
                </div>
            </div>

        </div>
    );
};

export default MainBlogDesign;