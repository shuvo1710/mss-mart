import React, { useContext, useState } from 'react';
// import logIn from "../../resource/loginPage.jpg"
import logIn from "../../resource/login2.jpg"
import { RxHome } from 'react-icons/rx'
import { Link } from 'react-router-dom';
import { UserContext } from '../../CategoryContext/AuthContext';
import { toast } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import UseToken from '../UseToken/UseToken';

const Login = () => {
    const [userEmail, setUserEmail] = useState('')
    const [token] = UseToken(userEmail)
    const { logInWithEmailAndPassword, googleLogIn, FaceBookLogin } = useContext(UserContext)



    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const UserEmail = form.userEmail.value;
        const password = form.password.value;
        console.log(password, UserEmail);

        logInWithEmailAndPassword(UserEmail, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Log in SuccessFull')
                setUserEmail(user.email)
                form.reset()
            })
            .catch(error => {
                toast.error(error.message)
                console.error(error)
            })
    }



    const handleGoogle = () => {
        googleLogIn()
            .then(result => {
                const user = result.user;
                toast.success("LogIn Successfull by Gooogle")
                setUserEmail(user.email)
                toast.success(user.email)
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handlefaceBook = () => {
        FaceBookLogin()
          .then((result) => {
            const user = result.user;
            setUserEmail(user.email)
            toast.success("LogIn Successfull by FaceBook");
            toast.success(user.email)
          })
          .catch((error) => {
            console.error(error);
          });
      };
    return (
        <div className=''>
            <div className=" min-h-screen bg-base-200 relative">
                <div className='absolute top-1/4 right-0'>
                    <div className='h-10 w-10 bg-white flex justify-center items-center cursor-pointer'>
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
                            <p className='py-2 text-white'>New To MSS-MART? <Link to={'/register'}>Please Sign Up.</Link></p>
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

                            <div className='flex gap-3 pt-4 justify-center items-center'>
                                <div onClick={handleGoogle} className='p-2 bg-white rounded-sm cursor-pointer'>
                                    <FcGoogle className='text-2xl' />
                                </div>
                                <div onClick={handlefaceBook} className='p-2 bg-white text-blue-600 rounded-sm cursor-pointer'>
                                    <FaFacebookF className='text-2xl' />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;