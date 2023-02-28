import React, { useContext } from 'react';
import { BiHeart } from 'react-icons/bi';
import { BsCartPlus, BsImages } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Category } from '../../CategoryContext/CategoryContext';
import Rating from '../Rating/Rating';

const RelatedProductCard = ({ RelatedProduct,setImg}) => {
    const {
        category,
        description,
        discount,
        images,
        price,
        productSizes,
        rating,
        title,
        _id
    } = RelatedProduct;
    const { setMOdalData } = useContext(Category);
    return (
        <div>
            <div className="relative image-parent border">
                <img className="first-image" src={images?.[0].i} alt="" />
                <img className="second-image" src={images?.[1].i} alt="" />
                <div className="icons top-4 right-4">
                    <div className="flex flex-col gap-y-2">
                        <p className="bg-white p-2 rounded-full">
                            <BiHeart className="heart duration-300 hover:scale-125 cursor-pointer" />
                        </p>
                        <p className="bg-white p-2 rounded-full">
                            <BsCartPlus className="cart duration-300 hover:scale-125 cursor-pointer" />
                        </p>
                        <label className="bg-white p-2 rounded-full" htmlFor="purchaseNow" onClick={() => setMOdalData(RelatedProduct)}>
                            <BsImages className="cart duration-300 hover:scale-125 cursor-pointer" />
                        </label>
                    </div>
                </div>
                <Link onClick={()=> setImg(images[0].i)} to={`/details/${_id}`} className="hiddenButton justify-center text-center">
                    <button  className="bg-black p-2 text-white rounded font-medium text-sm  hover:bg-white hover:text-black">
                        Order Now
                    </button>
                </Link>

                <div className=" p-2">
                    <a href="/" alt="" className="hover:underline duration-300 text-sm">
                        {title}
                    </a>
                    <div className="flex justify-between items-center pt-2">
                        <p className="font-semibold">Tk: {price}</p>
                        <div className="flex gap-1">
                            <Rating rating={rating}></Rating>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RelatedProductCard;