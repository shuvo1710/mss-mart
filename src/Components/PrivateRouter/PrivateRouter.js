import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext, { UserContext } from '../../CategoryContext/AuthContext';
import Loader from '../Loader/Loader';

const PrivateRouter = ({children}) => {
    
    const {user,loader} = UserContext(AuthContext)
    let location = useLocation()

    if(loader){
        return <Loader></Loader>
    }

    if(user?.uid){
        return children;
    }


   else{
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
   }
};

export default PrivateRouter;