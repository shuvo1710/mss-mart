import React from 'react';
import logIn from "../../resource/loginPage.jpg"
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
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${logIn})` }}>
            
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
            </div>
        </div>
    );
};

export default Login;