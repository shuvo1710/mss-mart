import React, { useState } from 'react';
import { Link } from
    'react-router-dom';
import { FcMenu } from "react-icons/fc"
import { BiSearch } from "react-icons/bi"
import { BsBag } from "react-icons/bs"
import { BsBookmark } from "react-icons/bs"
import { CiUser } from "react-icons/ci"
import { GrFormClose } from "react-icons/gr"

const Navbar = () => {
    // Check for menu
    // const Links = [
    //     { name: "HOME", link: '/' },
    //     { name: "PAGES", link: '/' },
    //     { name: "SHOP", link: '/' },
    //     { name: "PORTFOLIO", link: '/' },
    //     { name: "BLOG", link: '/' }
    // ]

    
    const Menu =
        <> 
         {/* <li className='md:ml-8 text-xs md:my-0 my-7  '> <a className='text-gray-800 hover:underline duration-500' >{link.name} </a> </li> */}

            <li className='md:ml-8 text-xs md:my-0 my-7'><Link  to='/home' className='text-gray-800 hover:underline duration-500' >HOME</Link> </li>
            <li className='md:ml-8 text-xs md:my-0 my-7'> <Link to='/home' className='text-gray-800 hover:underline duration-500'  >PAGES</Link></li>
            <li className='md:ml-8 text-xs md:my-0 my-7'><Link  to='/home' className='text-gray-800 hover:underline duration-500' >SHOP</Link></li>
            <li className='md:ml-8 text-xs md:my-0 my-7'><Link  to='/home' className='text-gray-800 hover:underline duration-500' >PORTFOLIO</Link></li>
            <li className='md:ml-8 text-xs md:my-0 my-7'><Link  to='/home' className='text-gray-800 hover:underline duration-500' >BLOG</Link></li>
            
        </>

    let [open, setOpen] = useState(false)
    return (
        <header className=" uppercase w-full font-['Noto_sans, sans-serif']  bg-white  align-top font-semibold">

            <div className='bg-white  text-white flex lg:justify-between justify-around  w-full items-center space-x-0  md:py-3 md:px-5 h-16 border-b:rgba(255,255,255,0)  border-b-[1px] border-solid'>
                <div>

                    <ul className={`md:flex absolute z-50 md:static md:mt-0 mt-7 md:w-full w-full  bg-white left-0 md:pl-0 pl-8  text-black transition-all duration-500 ease-in ${open? 'top-18 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0' }`}>
                        {    Menu
                            // Links.map((link) => (
                            //     <li className='md:ml-8 text-xs md:my-0 my-7  ' key={link.name}  > <a className='text-gray-800 hover:underline duration-500' href={link.link}>{link.name} </a> </li>
                            // ))
                             // Check for menu
                        }
                    </ul>
                </div>

                <div className=' '>
                    <h1 className='font-bold text-black md:ml-0 ml-[-80px]'>Logo</h1>
                </div>

                <div className='flex   text-black '>
                    <div className='flex items-center  ml-4 text-xs  tracking-widest'>
                        <span className='m-auto'>SEARCH</span>
                        <span className=' text-green-800 m-auto '>
                            <BiSearch className='w-8 h-4'></BiSearch>
                        </span>
                    </div>

                    <div className='lg:flex items-center ml-4 hidden lg:block text-xs tracking-widest'>
                        <span className='m-auto'>CART</span>
                        <span className=' text-green-800 m-auto '>
                            <BsBag className='w-8 h-4'></BsBag>
                        </span>
                        <span className='m-auto'>0</span>

                    </div>

                    <div className='flex items-center ml-4 hidden lg:block text-xs tracking-widest'>
                        <div className='flex tracking-widest'>
                            <span className=' text-green-800 m-auto '>
                                <BsBookmark className='w-8 h-4 ml-0'></BsBookmark>
                            </span>
                            <span className='m-auto'>0</span>
                        </div>

                    </div>
                    <div className='flex items-center ml-4 hidden lg:block text-xs'>
                        <span className=' text-green-800 m-auto '>
                            <CiUser className='w-8 h-4'  ></CiUser>
                        </span>
                    </div>
                  
                        <div onClick={() => setOpen(!open)} className='md:hidden mr-0'> {/* <BiMenu name='menu' onClick={()=> setOpen(!open)}/>  <GrFormClose name={open? 'close': 'menu'}/>  */}
                            {
                                open ? <GrFormClose /> : <FcMenu />
                            }
                        </div>

                </div>
            </div>

        </header>
    );
};

export default Navbar;