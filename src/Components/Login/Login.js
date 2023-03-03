import React from 'react';
// import logIn from "../../resource/loginPage.jpg"
import logIn from "../../resource/login2.jpg"
import { RxHome } from 'react-icons/rx'
import { Link } from 'react-router-dom';
const Login = () => {

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const UserEmail = form.userEmail.value;
        const password = form.password.value;
        console.log(password, UserEmail);
    }

    return (
        <div className=''>
            {/* <div className="hero min-h-screen" style={{ backgroundImage: `url(${logIn})` }}>
            
                <div className="hero-overlay bg-opacity-60 relative"></div>
                <div className='absolute top-1/4 right-0'>
                    <div className='h-10 w-10 bg-white flex justify-center items-center'>
                    <Link to="/"><RxHome className='text-red-600'></RxHome></Link>
                    </div>
                </div>
                <div className="hero-content text-neutral-content">
                    <div className=''>
                        <h2 className='text-2xl font-bold text-center'>Log In</h2>
                        <p className='py-2'>New To MSS-MART? <Link to={'/register'}>Please Sign Up.</Link></p>
                        <form className='' onSubmit={handleLogin}>
                            <div className='pt-2 UserEmail'>
                                <label className='text-base'>Enter Your Email</label>
                                <input type="email" name='userEmail' placeholder="Enter your Email" className='p-2 border mt-1 h-full w-full bg-transparent focus:outline-none active:bg-transparent' required />
                            </div>
                            <div className='pt-4'>
                                <label className='text-base'>Enter Your password</label>
                                <input type="password" name='password' placeholder="Enter your password" className='p-2 border mt-1 h-full w-full bg-transparent focus:outline-none' required />
                            </div>
                            <div className='flex justify-center items-center lg:pt-4 md:pt-2'>
                                <button className='py-2 px-6 text-white bg-primary rounded-md bg-transparent border border-white'>Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}
            <div className=" min-h-screen bg-base-200 relative">
                <div className='absolute top-1/4 right-0'>
                    <div className='h-10 w-10 bg-white flex justify-center items-center'>
                        <Link to="/"><RxHome className='text-black'></RxHome></Link>
                    </div>
                </div>
                <div className="grid grid-cols-12 ">
                    <div className='screen-full col-span-7'>
                        <img src={logIn} alt="" className="screen-full" />
                    </div>
                    <div className='flex items-center justify-center bg-cyan-800 col-span-5'>
                        <div>
                            <h1 className="lg:text-4xl text-xl text-center font-bold pb-4 text-black">Log in Now</h1>
                            <form className='' onSubmit={handleLogin}>
                                <div className='pt-2 UserEmail'>
                                    <label className='text-base text-white'>Enter Your Email</label>
                                    <input type="email" name='userEmail' placeholder="Enter your Email" className='p-2 border text-white mt-1 h-full w-full bg-transparent focus:outline-none active:bg-transparent' required />
                                </div>
                                <div className='pt-4'>
                                    <label className='text-base text-white'>Enter Your password</label>
                                    <input type="password" name='password' placeholder="Enter your password" className='p-2 border text-white mt-1 h-full w-full bg-transparent focus:outline-none' required />
                                </div>
                                <div className='flex justify-center items-center lg:pt-4 md:pt-2'>
                                    <button className='py-2 px-6 text-black bg-white rounded-md hover:text-white hover:bg-black duration-300'>Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;