import React from 'react';
import avatarImg from '../../resource/blog pic/Black-Dress-Outfits-1-1-540x0.jpg';
import { HiLocationMarker, HiOutlineMail, HiPhone } from "react-icons/hi";
import { FiEdit3 } from 'react-icons/fi'

const Profile = () => {
    return (
        <> <div class=" overflow-y-auto flex flex-col">
            <div class="flex flex-col space-y-4 p-4 justify-center items-center ">
                <div class="w-[30%] p-2 h-52 bg-white border rounded  justify-center items-center">
                    <div className="flex justify-end">
                        <button
                            className="tooltip tooltip-left"
                            data-tip="NickName"
                        >
                            <FiEdit3 className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="text-center">
                        <div className="avatar online">
                            <div className="w-20 rounded-full">
                                <img src={avatarImg} alt="user" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-lg">Emma</h1>
                            <p className="text-sm uppercase ">Software Engineer</p>
                        </div>
                    </div>
                </div>
                <div class=" w-[30%] h-64 bg-white border rounded p-4 justify-center items-center">
                    <h1 className="text-lg">Personal Information</h1>
                    <div className="p-3">
                        <h1 className="text-sm mt-2">Location</h1>
                        <div className="flex justify-between items-center mb-2">
                            <h1>Uttara Dhaka Bangladesh</h1>
                            <HiLocationMarker className="w-5 h-5" />
                        </div>
                        <hr />
                        <h1 className="text-sm mt-2">Phone Number</h1>
                        <div className="flex justify-between items-center mb-2">
                            <h1>+592 54528 2654</h1>
                            <HiPhone className="w-5 h-5" />
                        </div>
                        <hr />
                        <h1 className="text-sm mt-2">Email</h1>
                        <div className="flex  justify-between items-center mb-2">
                            <h1 className="flex flex-wrap">emma@gmail.com</h1>
                            <HiOutlineMail className="w-5 h-5" />
                        </div>
                        <hr />
                    </div>
                </div>

            </div>
        </div>

        </>

    );
};
export default Profile;


