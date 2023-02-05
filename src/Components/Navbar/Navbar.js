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
        <header className=" uppercase w-full font-['Noto_sans, sans-serif'] relative inline-block h-32 bg-white z-100 align-top font-semibold">


            <div className='bg-white text-white flex justify-between items-center py-3 px-5 h-32 border-b:rgba(255,255,255,0)  border-b-[1px] border-solid'>

                <ul className='md:flex  text-black '>
                    {
                        Links.map((link) => (
                            <li className='md:ml-8 text-xs ' key={link.name}  > <a className='text-gray-800 hover:underline duration-500' href={link.link}>{link.name} </a> </li>
                        ))
                    }
                </ul>
                <div className=' flex '>
                    <h1 className='font-bold text-black'>Logo</h1>
                </div>
                <div className='flex text-black'>
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
    );
};

export default Navbar;