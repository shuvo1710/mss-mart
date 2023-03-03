import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { RxHome } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { UserContext } from '../../CategoryContext/AuthContext';
import logIn from "../../resource/loginPage.jpg"

import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

const Register = () => {
    const { registerWithEmailPass, updateUser, googleLogIn, FaceBookLogin, githubLogIn } = useContext(UserContext)
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const newPassword = form.newPassword.value;
        const confirmPassword = form.confirmPassword.value;
        const fullName = firstName + ' ' + lastName

        const image = form.image.files[0];

        if (newPassword !== confirmPassword) {
            return toast.error('password not matched', {
                style: {
                    border: '1px solid black',
                    color: 'black',
                    fontWeight: '600'
                },
            })
        }
        const fromData = new FormData()
        fromData.append('image', image)
        const url = "https://api.imgbb.com/1/upload?key=4ed0788280979d06e12345ebe75021e9"
        fetch(url, {
            method: 'POST',
            body: fromData
        })
            .then(res => res.json())
            .then(imageData => {
                toast.success('image post')

                registerWithEmailPass(email, confirmPassword)
                    .then(result => {
                        const user = result.user;
                        toast.success('register SuccessFull')
                        updateUser(fullName, imageData.display_url)
                        form.reset()
                    })

                    .catch(error => console.error(error))
            })

    }

    const handleGoogle = () => {
        googleLogIn()
            .then(result => {
                console.log(result.user)
                toast.success("LogIn Successfull by Gooogle")
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handlefaceBook = () => {
        FaceBookLogin()
            .then(result => {
                console.log(result.user)
                toast.success("LogIn Successfull by FaceBook")
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handlegitHub = () => {
        githubLogIn()
            .then(result => {
                console.log(result.user)
                toast.success("LogIn Successfull by Github")
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className=''>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1600'})` }}>

                <div className="hero-overlay bg-opacity-60 relative"></div>
                <div className='absolute top-1/4 right-0'>
                    <div className='h-10 w-10 bg-white flex justify-center items-center cursor-pointer'>
                        <Link to="/"><RxHome className='text-black'></RxHome></Link>
                    </div>
                </div>
                <div className="hero-content text-neutral-content">
                    <div className=''>
                        <h2 className='text-2xl font-bold text-center'>Register Now</h2>

                        <form className='' onSubmit={handleLogin}>
                            <div className='md:flex items-center gap-4 w-full'>
                                <div className='pt-2 w-full'>
                                    <label className='text-base'>Enter Your First Name</label>
                                    <input type="text" name='firstName' placeholder="Enter your First Name" className='p-2 border mt-1 h-full w-full bg-transparent focus:outline-none active:bg-transparent' required />
                                </div>
                                <div className='pt-2 w-full'>
                                    <label className='text-base'>Enter Your Last Name</label>
                                    <input type="text" name='lastName' placeholder="Enter your last Name" className='p-2 border mt-1 h-full w-full bg-transparent focus:outline-none active:bg-transparent' required />
                                </div>
                            </div>
                            <div className='pt-2 UserEmail'>
                                <label className='text-base'>Enter Your Email</label>
                                <input type="email" name='email' placeholder="Enter your Email" className='p-2 border mt-1 h-full w-full bg-transparent focus:outline-none active:bg-transparent' required />
                            </div>
                            <div className='pt-2'>
                                <label className='text-base'>Enter Your Image</label>
                                <input type="file" name='image' placeholder="Enter your First Name" className='p-2 border mt-1 h-full w-full bg-transparent focus:outline-none active:bg-transparent' required />
                            </div>
                            <div className='md:flex items-center gap-4'>
                                <div className='pt-2 w-full'>
                                    <label className='text-base'>Enter Your New password</label>
                                    <input type="password" name='newPassword' placeholder="Enter your New password" className='p-2 border mt-1 h-full w-full bg-transparent focus:outline-none' required />
                                </div>
                                <div className='pt-2 w-full'>
                                    <label className='text-base'>Enter Your confirm password</label>
                                    <input type="password" name='confirmPassword' placeholder="Enter your Confirm password" className='p-2 border mt-1 h-full w-full bg-transparent focus:outline-none' required />
                                </div>
                            </div>
                            <p className='py-2'>Already Have An Account? <Link to='/login' className=''>Please LogIn.</Link></p>
                            <div className='flex justify-center items-center lg:pt-4 md:pt-2'>
                                <button className='py-2 px-6 text-white hover:bg-gray-500 font-semibold rounded-md bg-transparent border border-white'>Register Now</button>
                            </div>
                        </form>
                        <div className='flex gap-3 pt-4 justify-center items-center'>
                            <div onClick={handleGoogle} className='p-2 bg-white rounded-sm cursor-pointer'>
                                <FcGoogle className='text-2xl' />
                            </div>
                            <div onClick={handlefaceBook} className='p-2 bg-white text-blue-600 rounded-sm cursor-pointer'>
                                <FaFacebookF className='text-2xl' />
                            </div>
                            <div onClick={handlegitHub} className='p-2 bg-white text-black rounded-sm cursor-pointer'>
                                <AiFillGithub className='text-2xl' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;