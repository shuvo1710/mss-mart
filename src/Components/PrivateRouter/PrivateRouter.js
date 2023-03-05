import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext, { UserContext } from '../../CategoryContext/AuthContext';
import Loder from '../Loder/Loder';

const PrivateRouter = ({children}) => {
    
    const {user,loader} = UserContext(AuthContext)
    let location = useLocation()

    if(loader){
        return <Loder></Loder>
    }

    if(user?.uid){
        return children;
    }


   else{
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
   }
};

export default PrivateRouter;