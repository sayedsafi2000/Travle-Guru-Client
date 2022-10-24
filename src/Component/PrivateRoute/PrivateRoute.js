import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <p className='text-white text-bolder my-8 text-center'>Loading..........</p>
    }
    if(!user){
        return <Navigate to={"/login"} state={{from:location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;