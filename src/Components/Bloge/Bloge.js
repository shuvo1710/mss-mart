import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainBlogDesign from './MainBlogDesign';



const Bloge = () => {
    const [blogData, setBlogData] =useState([])

    useEffect(()=>{
        fetch('Blog.json')
        .then(res=>res.json())
        .then(data=>setBlogData(data.slice(0,3)))

    },[])

    return (
        <div className="container mx-auto pt-28">
            <div className='text-center pb-10'>
                <h1 className='headerStyle text-xl md:text-4xl font-medium pb-2'>Fashion Blog</h1>
                <h3 className='headerStyle text-lg md:text-2xl font-medium'>Dress Trend With Confidence and Style Tips
                </h3>
            </div>
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {
            blogData?.map(blog=><MainBlogDesign key={blog._id} blog={blog}></MainBlogDesign>)
            }
            </div>
            <div className='flex justify-center items-center text-center pt-6'>
            <button className='shadow-md p-2'> <Link to='/allblog'>See more</Link> </button>
            </div>
        </div>
    );
};

export default Bloge;