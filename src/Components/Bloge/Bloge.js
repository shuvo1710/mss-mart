import React from 'react';
import img1 from '../../resource/blog pic/Black-Dress-Outfits-1-1-540x0.jpg'
import img2 from '../../resource/blog pic/Legging-Outfits-1-600x825.jpg'
import img3 from '../../resource/blog pic/Spring-Outfits-2-600x900.jpg'

const Bloge = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className='text-center pb-10'>
                <h1 className='headerStyle text-xl md:text-4xl font-medium mb-4'>Fashion Blog</h1>
                <h3 className='headerStyle text-lg md:text-2xl font-medium'>Dress Trend With Confidence and Style Tips
                </h3>
            </div>
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <img
                        src={img1}
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
                                Offer
                            </a>

                        </p>
                        <a
                            href="/"
                            aria-label="Category"
                            title="Visit the East"
                            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            30 Cute Black Dress Outfits – How To Wear A Black Dress
                        </a>
                        <p className="mb-2 text-gray-700">
                            The possibilities are endless when it comes to wearing your favorite little black dress, making it easy to create a timeless outfit...
                        </p>

                    </div>
                </div>
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <img
                        src={img2}
                        className="object-cover w-full h-64"
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
                                News
                            </a>

                        </p>
                        <a
                            href="/"
                            aria-label="Category"
                            title="Simple is better"
                            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            Style Tips on How to Wear Leggings – Outfits
                        </a>
                        <p className="mb-2 text-gray-700">
                            A new season means new outfits, and we couldn’t be more excited about that. But what do you do when the weather’s hot in the day…
                        </p>

                    </div>
                </div>
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <img
                        src={img3}
                        className="object-cover w-full h-64"
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
                                News
                            </a>

                        </p>
                        <a
                            href="/"
                            aria-label="Category"
                            title="Film It!"
                            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            The Best Spring Outfits This Season
                        </a>
                        <p className="mb-2 text-gray-700">
                            For the modern woman, the comfort and versatility of leggings cannot be underestimated.  from office ...
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bloge;