import React from 'react';
import { BiHeart } from 'react-icons/bi';
import { BsCartPlus, BsImages, BsStar } from 'react-icons/bs';

const RecommendationCard = ({ product }) => {
    // const products = product;
    const {
        category,
        description,
        discount,
        images,
        price,
        productSizes,
        rating,
        title,
    } = product;
    
    return (

        <div>
            <div className="relative image-parent">
                <img
                    className="first-image"
                    src={images?.[0].i}
                    alt=""
                />
                <img
                    className="second-image"
                    src={images?.[1].i}
                    alt=""
                />
                <div className="icons top-4 right-4">
                    <div className="flex flex-col gap-y-2">
                        <p className="bg-white p-2 rounded-full">
                            <BiHeart className="heart duration-300 hover:scale-125 cursor-pointer" />
                        </p>
                        <p className="bg-white p-2 rounded-full">
                            <BsCartPlus className="cart duration-300 hover:scale-125 cursor-pointer" />
                        </p>
                        
                        <p className="bg-white p-2 rounded-full">
                            <BsImages className="cart duration-300 hover:scale-125 cursor-pointer" />
                        </p>
                        
                    </div>
                </div>

                <div className=" p-2">
                    <a href="/" alt="" className="hover:underline duration-300">Lorem ipsum dolor sit amet.</a>
                    <div className="flex justify-between">
                        <p className="font-semibold">$33.00</p>
                        <div className="flex gap-1">
                            <p><BsStar /></p>
                            <p><BsStar /></p>
                            <p><BsStar /></p>
                            <p><BsStar /></p>
                            <p><BsStar /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecommendationCard;