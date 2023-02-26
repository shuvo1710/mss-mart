import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllBlog = () => {
    const [blogData, setBlogData] =useState([])

    useEffect(()=>{
        fetch('Blog.json')
        .then(res=>res.json())
        .then(data=>setBlogData(data))

    },[])
console.log(blogData);

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className='text-center pb-10'>
            <h1 className='headerStyle text-xl md:text-4xl font-medium mb-4'>Fashion Blog</h1>
            <h3 className='headerStyle text-lg md:text-2xl font-medium'>Dress Trend With Confidence and Style Tips
            </h3>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {
                blogData?.map(blog => ( <div key={blog._id} className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                <img
                    src={blog.img}
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
                            {blog.name}
                        </a>
    
                    </p>
                    <a
                        href="/"
                        aria-label="Category"
                        title="Visit the East"
                        className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                        {blog.title.slice(0,50)} ...
                    </a>
                    <p className="mb-2 text-gray-700">
                        {blog.description.slice(0,150)} ...
                    </p>
    
                    <div className='flex  justify-between'>
                        <button className='shadow-md p-2'> <Link to={`/blogdetails/${blog._id} `}   >Details</Link> </button>
                        
                    </div>
                </div>
    
            </div>))
            }
        </div>
    </div>
    );
};

export default AllBlog;