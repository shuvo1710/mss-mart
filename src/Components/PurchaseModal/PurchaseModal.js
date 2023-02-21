import React, { useContext } from 'react';
import "./PurchaseModal.css"
import { Category } from '../../CategoryContext/CategoryContext';
import img1 from "../../resource/New folder/shirt/mens-casual-shirt-010.jpeg"

const PurchaseModal = () => {
    const { modalData } = useContext(Category)

    return (
        <div>
            <div className="modal" id="purchaseNow">
                <div className="modal-box w-10/12 max-w-5xl">
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-2'>
                        <div>
                            <div className='w-full'>
                                <img className='' src={img1} alt='' />
                            </div>
                        </div>
                        <div className=''>
                            <h4>products Title</h4>
                            <h3>Price:55</h3>
                            <div>
                                <p>Star</p>
                            </div>
                            <div className='mt-5'>
                                <div className='flex my-2'>
                                    <p className='rightInfo'>availabilaty:</p>
                                    <p className='text-green-500'>In Stock</p>
                                </div>
                                <div className='flex my-2'>
                                    <p className='rightInfo'>Product Name:</p>
                                    <p>lorem jhgbjhb mjbj</p>
                                </div>
                                <div className='flex my-2'>
                                    <p className='rightInfo'>Product ID:</p>
                                    <p>5415412</p>
                                </div>
                                <div className='my-2'>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text ever
                                        since the 1500s, when an unknown printer
                                    </p>
                                </div>
                                <p>Size: <span>M</span></p>

                                <div className='flex gap-4 mt-4'>
                                    <p className='py-1 px-2 bg-black text-white'>M</p>
                                    <p className='py-1 px-2 bg-white text-black border border-black hover:bg-black hover:text-white duration-300 hover:border hover:border-black'>L</p>
                                    <p className='py-1 px-2 bg-white text-black border border-black hover:bg-black hover:text-white duration-300 hover:border hover:border-black'>XL</p>
                                </div>
                                <p className='my-2'>note</p>
                                <div>
                                    <textarea className="textarea border border-gray-500 w-full" placeholder="Bio"></textarea>
                                </div>
                                <p className='my-2'>QUANTITY:</p>
                                <div className='flex items-center'>
                                    <p className='px-1 py-1 text-gray-400 border'>-</p>
                                    <p className='py-1 px-2 border bg-gray-300'>2</p>
                                    <p className='px-1 py-1 text-gray-400 border'>+</p>
                                </div>
                                <div className='mt-3 flex items-center gap-3'>

                                    <button className="btn modalButton">Add To Cart</button>
                                    <button className="btn modalButton">Buy It Now</button>

                                    <div className="modal-action m-0">
                                        <a href="#" className="btn modalButton">Close</a>
                                    </div>
                                </div>






                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default PurchaseModal;