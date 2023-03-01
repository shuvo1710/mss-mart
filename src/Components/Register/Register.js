import React from 'react';

const Register = () => {
    const handleRegister = (event) => {
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
        <div className='w-6/12 mx-auto border my-16 p-4 rounded'>
            <form onSubmit={handleRegister}>
                                <div className='pt-2'>
                                    <label className='text-base'>Enter Your Name</label>
                                    <input type="text" name='userName' placeholder="enter your name" className='p-2 border mt-1 h-full w-full' required />
                                </div>

                                <div className='pt-2'>
                                    <label className='text-base'>Enter Your Email</label>
                                    <input type="email" name='userEmail' placeholder="enter your Email" className='p-2 border mt-1 h-full w-full' required />
                                </div>

                                <div className='pt-2'>
                                    <label className='text-base'>Choose Image</label>
                                    <input name='userImg' type="file" placeholder="enter your name" className='p-2  mt-1 h-full w-full' required />
                                </div>

                                <div className='pt-2'>
                                    <label className='text-base'>Please Select Your Gender</label>
                                    <select name='gender' className="select w-full border" required>
                                        <option defaultValue value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="under 18">Under 18</option>
                                    </select>
                                </div>

                                <div className='pt-2'>
                                    <label className='text-base'>Enter Your password</label>
                                    <input type="password" name='password' placeholder="enter your name" className='p-2 border mt-1 h-full w-full' required />
                                </div>

                                <div className='pt-2'>
                                    <label className='text-base'>Enter Confirm password</label>
                                    <input type="password" name='userConPass' placeholder="enter your password" className='p-2 border mt-1 h-full w-full' required />
                                </div>

                                <div className='flex justify-center items-center lg:pt-4 md:pt-2'>
                                    <button className='py-2 px-6 text-white bg-primary rounded-md'>Sign Up</button>
                                </div>
                            </form>
        </div>
    );
};

export default Register;