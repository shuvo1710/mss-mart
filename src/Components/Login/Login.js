import React from 'react';
import logIn from "../../resource/loginPage.jpg"
const Login = () => {

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.userName.value;
        const email = form.userEmail.value;
        const password = form.password.value;
        const confirmPass = form.userConPass.value;
        const male = form.gender.value;
        const userPhoto = form.userImg.files[0];
        console.log(name, email, password, confirmPass, male, userPhoto);
    }

    return (
        <div className=''>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${logIn})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                
                <div className="hero-content text-neutral-content">
                    <div className=''>
                    <h2 className='text-2xl font-bold text-center'>Log In</h2>
                        <form className='' onSubmit={handleLogin}>
                            <div>
                                <div className='pt-2'>
                                    <label className='text-base'>Enter Your Email</label>
                                    <input type="email" name='userEmail' placeholder="enter your Email" className='p-2 border mt-1 h-full w-full bg-transparent focus:outline-none' required />
                                </div>
                                <div className='pt-2'>
                                    <label className='text-base'>Enter Your password</label>
                                    <input type="password" name='password' placeholder="enter your name" className='p-2 border mt-1 h-full w-full bg-transparent focus:outline-none' required />
                                </div>

                                <div className='pt-2'>
                                    <label className='text-base'>Enter Confirm password</label>
                                    <input type="password" name='userConPass' placeholder="enter your password" className='p-2 border mt-1 h-full w-full bg-transparent focus:outline-none' required />
                                </div>
                                <div className='flex justify-center items-center lg:pt-4 md:pt-2'>
                                    <button className='py-2 px-6 text-white bg-primary rounded-md bg-transparent border border-white'>Sign In</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;