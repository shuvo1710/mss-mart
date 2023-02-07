import React from 'react';
import { BsCartPlus } from 'react-icons/bs'
import { BiHeart } from 'react-icons/bi'
import { BsStar } from 'react-icons/bs'
const ProductCard = () => {
    return (
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
    );
};

export default ProductCard;