import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext, { UserContext } from '../../CategoryContext/AuthContext';
import Loader from '../Loder/Loader';


const PrivateRouter = ({children}) => {
    const {user,loader} = useContext(UserContext)
    let location = useLocation()

    if(loader){
        return <Loader></Loader>
    }

    if(user){
        return children;
    }
   else{
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
   }
};

export default PrivateRouter;