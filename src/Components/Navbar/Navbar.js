import React from 'react';
import { Link } from
    'react-router-dom';
import { FcMenu } from "react-icons/fc"
import { BiSearch } from "react-icons/bi"
import { BsBag } from "react-icons/bs"
import { BsBookmark } from "react-icons/bs"
import { CiUser } from "react-icons/ci"
import { GrFormClose } from "react-icons/gr"

const Navbar = () => {
    const Links = [
        { name: "HOME", link: '/' },
        { name: "PAGES", link: '/' },
        { name: "SHOP", link: '/' },
        { name: "PORTFOLIO", link: '/' },
        { name: "BLOG", link: '/' }
    ]
    return (
        <div>
            <header className=" uppercase w-full font-['Noto_sans, sans-serif'] relative inline-block h-32 bg-white z-100 align-top font-semibold">
                <div className='flex justify-between pl-16 pr-16 mr-0 ml-0 border-b:rgba(255,255,255,0)  border-b-[1px] border-solid h-32'>
                    {/* Menu div start */}
                    <div className='flex w-full h-full items-center'>
                        <ul className='md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  '>
                            {
                                Links.map((link) => (
                                    <li className='md:ml-8 text-xs ' key={link.name}  > <a className='text-gray-800 hover:underline duration-500' href={link.link}>{link.name} </a> </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className='m-auto'>Logo</div>



                    <div className=' flex justify-end w-full h-full items-center '>
                        <div className='flex items-center  ml-4 text-xs tracking-widest'>
                            <span className='m-auto'>SEARCH</span>
                            <span className=' text-green-800 m-auto '>
                                <BiSearch className='w-8 h-4'></BiSearch>
                            </span>
                        </div>

                        <div className='flex items-center ml-4 text-xs tracking-widest'>
                            <span className='m-auto'>CART</span>
                            <span className=' text-green-800 m-auto '>
                                <BsBag className='w-8 h-4'></BsBag>
                            </span>
                            <span className='m-auto'>0</span>
                        </div>

                        <div className='flex items-center ml-4 text-xs tracking-widest'>
                            <div className='flex tracking-widest'>
                                <span className=' text-green-800 m-auto '>
                                    <BsBookmark className='w-8 h-4 ml-0'></BsBookmark>
                                </span>
                                <span className='m-auto'>0</span>
                            </div>

                        </div>
                        <div className='flex items-center ml-4 text-xs'>
                            <span className=' text-green-800 m-auto '>
                                <CiUser className='w-8 h-4'  ></CiUser>
                            </span>
                        </div>
                    </div>
                </div>

            </header>
        </div>
    );
};

export default Navbar;