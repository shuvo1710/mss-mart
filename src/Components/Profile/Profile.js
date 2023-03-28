import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../CategoryContext/AuthContext';
import Loader from '../Loder/Loader';



const Profile = () => {
    const [file, setFile] = useState(null);
    // const [user,setUser] = useState('')
    const {user} = useContext(UserContext)
   
     const {data:userInfo, isLoading} = useQuery({
        queryKey:['user', user?.email],
        queryFn: async ()=>{
            const res = await fetch(`https://mss-mart-server.vercel.app/user?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
     })

     if(isLoading){
        return <Loader/>
     }

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
                        <img className="h-32 w-32 rounded-lg object-cover" src={userInfo?.imageUrl} alt="Profile"   
                        />
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
            defaultValue={userInfo?.fullName}
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
            defaultValue={userInfo?.email}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="email"
                placeholder="Email"
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


