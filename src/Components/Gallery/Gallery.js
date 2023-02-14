import React, { useContext, useEffect, useState } from 'react';
import "./Gallery.css"
import ethnics from "../../resource/ethnics.jpg"
import panjabi from "../../resource/panjabi.jpg"
import couple from "../../resource/couple1.jpg"
import femaleTshirt from "../../resource/femaleTshirt.jpg"
import femaleOnePis from "../../resource/femaleOnePis1.jpg"
import kidsTshirt from "../../resource/kids-tShart.webp"
import mansShirt from "../../resource/mans-shart.jpg"
import mansPolo from "../../resource/mans-polo.jpg"
import western1 from "../../resource/western1.jpg"
import western2 from "../../resource/western2.jpg"
import  { Category } from '../../CategoryContext/CategoryContext';
import { Link } from 'react-router-dom';


const Gallery = () => {
    const {setCategoryName, storeProduct}=useContext(Category);
    return (
        <div className='my-20'>
            <div className='container mx-auto'>
                <div className='text-center pb-10'>
                    <h1 className='headerStyle text-xl md:text-4xl font-medium mb-4'>Most Loved Categories</h1>
                    <h3 className='headerStyle text-lg md:text-2xl font-medium'>Shop Our Best-Selling Styles and Find Your New Favorite Outfit</h3>
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 mb-2 gap-3'>
                    <Link to="/check"  onClick={()=> setCategoryName("womanLawn")}  className='overflow-hidden relative items'>
                        <img alt='' src={ethnics} className="img-animation" />
                        <div className=" absolute inset-0 flex flex-col justify-center text-center transition-opacity duration-300 bg-black bg-opacity-40 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-5xl text-line-height font-medium text-gray-100">
                                Premium Lawn
                            </p>
                        </div>
                    </Link>
                    <Link to="/check" onClick={()=> setCategoryName("panjabi")}  className='overflow-hidden relative items'>
                        <img alt='' src={panjabi} className="img-animation" />
                        <div className=" absolute inset-0 flex flex-col justify-center text-center transition-opacity duration-300 bg-black bg-opacity-40 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-5xl text-line-height font-medium text-gray-100">
                                panjabi
                            </p>
                        </div>
                    </Link>
                </div>
                <div  className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2'>
                    <Link to="/check" onClick={()=> setCategoryName("coupleTShirt")} className='overflow-hidden relative items'>
                        <img src={couple} alt='' className="img-animation" />
                        <div className=" absolute inset-0 flex flex-col justify-center text-center transition-opacity duration-300 bg-black bg-opacity-40 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-3xl text-line-height font-medium text-gray-100">
                                Couple
                            </p>
                        </div>
                    </Link>
                    <Link to="/check" onClick={()=> setCategoryName("femaleTShirt")} className='overflow-hidden relative items'>
                        <img src={femaleTshirt} alt='' className="img-animation" />
                        <div className=" absolute inset-0 flex flex-col justify-center text-center transition-opacity duration-300 bg-black bg-opacity-40 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-3xl text-line-height font-medium text-gray-100">
                                Female T-shirt
                            </p>
                        </div>
                    </Link>
                    <Link to="/check"   onClick={()=> setCategoryName("femaleOnePiece")} className='overflow-hidden relative items'>
                        <img src={femaleOnePis} alt='' className="img-animation" />
                        <div className=" absolute inset-0 flex flex-col justify-center text-center transition-opacity duration-300 bg-black bg-opacity-40 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-3xl text-line-height font-medium text-gray-100">
                            Female One Piece
                            </p>
                        </div>
                    </Link>
                    <Link to="/check"   onClick={()=> setCategoryName("kidsTShirt")} className='overflow-hidden relative items'>
                        <img src={kidsTshirt} alt='' className="img-animation" />
                        <div className=" absolute inset-0 flex flex-col justify-center text-center transition-opacity duration-300 bg-black bg-opacity-40 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-3xl text-line-height font-medium text-gray-100">
                                Kids
                            </p>
                        </div>
                    </Link>
                    <Link to="/check"   onClick={()=> setCategoryName("casualShirt")} className='overflow-hidden relative items'>
                        <img src={mansShirt} alt='' className="img-animation" />
                        <div className=" absolute inset-0 flex flex-col justify-center text-center transition-opacity duration-300 bg-black bg-opacity-40 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-3xl text-line-height font-medium text-gray-100">
                                Mans Shirt
                            </p>
                        </div>
                    </Link>
                    <Link to="/check"   onClick={()=> setCategoryName("poloTShirt")}  className='overflow-hidden relative items'>
                        <img src={mansPolo} alt='' className="img-animation" />
                        <div className=" absolute inset-0 flex flex-col justify-center text-center transition-opacity duration-300 bg-black bg-opacity-40 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-3xl text-line-height font-medium text-gray-100">
                                Mans Polo
                            </p>
                        </div>
                    </Link>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 mt-2 gap-2'>
                    <Link to="/check" onClick={()=> setCategoryName("western")} className='overflow-hidden relative items'>
                        <img src={western1} alt='' className="img-animation" />
                        <div className=" absolute inset-0 flex flex-col justify-center text-center transition-opacity duration-300 bg-black bg-opacity-40 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-5xl text-line-height font-medium text-gray-100">
                                Western
                            </p>
                        </div>
                    </Link>
                    <Link to="/check" onClick={()=> setCategoryName("western")}  className='overflow-hidden relative items'>
                        <img src={western2} alt='' className="img-animation" />
                        <div className=" absolute inset-0 flex flex-col justify-center text-center transition-opacity duration-300 bg-black bg-opacity-40 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-5xl text-line-height font-medium text-gray-100">
                                Western
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Gallery;