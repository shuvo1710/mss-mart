import React from 'react';
import "./LogInModal.css"

const LogInModal = () => {

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
        <div>
            <input type="checkbox" id="UserModal" className="modal-toggle" />

            <label htmlFor="UserModal" className="modal cursor-pointer ">
                <label className="modal-box relative lg:w-6/12 md:w-8/12 w-11/12 max-w-4xl" htmlFor="">
                    <label htmlFor="UserModal" className="btn btn-sm btn-circle absolute right-2 top-3">✕</label>
                    <h3 className="text-xl font-bold">Sign in</h3>
                    <p className="text-lg pt-4">New To MSS-MART? <span className='underline'>Please Sign Up</span></p>
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
                </label>
            </label>




        </div>
    );
};

export default LogInModal;