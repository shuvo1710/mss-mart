import React, { useState } from 'react';


const Profile = () => {


    const [file, setFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const profilePicture = form.profilePicture.files[0]
        const username = form.username.value
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value

        console.log('just something', form, profilePicture, username, email, password, confirmPassword);
    };

    const handleFileInputChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    return (
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
        <div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="profilePicture">
                    Profile Picture
                </label>
                <div className="flex items-center justify-center w-full">
                    {file ? (
                        <img className="h-32 w-32 rounded-lg object-cover" src={URL.createObjectURL(file)} alt="Profile"   
                        />
                    ) : (
                        <div className="h-20 w-20 rounded-full bg-gray-200"></div>
                    )}
                </div>
                <div className="mt-2">
                    <label className="w-full flex items-center justify-center px-4 py-2 bg-blue-500 rounded-md text-white font-bold focus:outline-none focus:shadow-outline hover:bg-blue-700">
                        {file ? 'Change Profile Picture' : 'Upload Profile Picture'}
                        <input
                            onChange={handleFileInputChange}
                            type="file"
                            name="profilePicture"
                            className="sr-only"
                            accept=".jpg, .jpeg, .png"
                        />
                    </label>
                </div>
            </div>

        </div>


        {/* User Info */}
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                Username
            </label>
            <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="username"
                type="text"
                placeholder="Username"
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
            </label>
            <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="email"
                placeholder="Email"
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                Password
            </label>
            <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                type="password"
                placeholder="Password"
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password
            </label>
            <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
            />
        </div>
        <div className="flex items-center justify-between">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
            >
                Update Profile
            </button>
        </div>
    </form>
    );
};
export default Profile;


