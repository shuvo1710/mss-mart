import React from 'react';
import { FaArrowRight, FaCartArrowDown, FaHeart, FaLock } from "react-icons/fa";
import './Card.css'
import { BsCartPlus } from 'react-icons/bs'
import { BiHeart } from 'react-icons/bi'
import { BsStar } from 'react-icons/bs'
const Card = () => {
    return (

        <div className='py-20'>
            <div className='text-center my-10'>
                <h1 className='headerStyle text-5xl font-medium py-4'>RECOMMENDED FOR YOU</h1>
                <h3 className='text-3xl'>Best purchase i've made this winter!</h3>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2  container mx-auto my-4">
                {
                    Array.from({ length: 12 }).map(sajib => <div>
                        <div className="relative image-parent">
                            <img
                                className="first-image"
                                src="https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_e64bc63a-735c-4c2c-9542-81681cff4891_360x.jpg?v=1614070027"
                                alt=""
                            />
                            <img
                                className="second-image"
                                src="https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_b71f02c8-1b6d-4f14-9686-cbd05ae3ab5c_360x.jpg?v=1615019404"
                                alt=""
                            />
                            <div className="example top-4 right-4">
                                <div className="">
                                    <BiHeart className="mb-4 heart duration-300 hover:scale-125 cursor-pointer" />
                                    <BsCartPlus className="cart duration-300 hover:scale-125 cursor-pointer" />
                                </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2  container mx-auto my-4">

            {
                Array.from({length:16}).map(sajib=>
                <div>
                    <div className="relative image-parent">
                        <img
                            className="first-image"
                            src="https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_e64bc63a-735c-4c2c-9542-81681cff4891_360x.jpg?v=1614070027"
                            alt=""
                        />
                        <img
                            className="second-image"
                            src="https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_b71f02c8-1b6d-4f14-9686-cbd05ae3ab5c_360x.jpg?v=1615019404"
                            alt=""
                        />
                        <div className="example top-4 right-4">
                            <div className="">
                                <BiHeart className="mb-4 heart duration-300 hover:scale-125 cursor-pointer" />

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
                    </div>)
                }
            </div>
        </div>
    );
};

export default Card;