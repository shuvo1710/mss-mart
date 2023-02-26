import React, { useEffect, useState } from 'react';
import MainBlogDesign from './MainBlogDesign';



const Bloge = () => {
    const [blogData, setBlogData] =useState([])

    useEffect(()=>{
        fetch('Blog.json')
        .then(res=>res.json())
        .then(data=>setBlogData(data.slice(0,3)))

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
            blogData?.map(blog=><MainBlogDesign key={blog._id} blog={blog}></MainBlogDesign>)
            }
            </div>
        </div>
    );
};

export default Bloge;