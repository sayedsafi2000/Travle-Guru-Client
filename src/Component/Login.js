import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';

const Login = () => {
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();


    const from = location.state?.from?.pathname || "/";
    const { googleProvider, login } = useContext(AuthContext)
    const googleAuthProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        googleProvider(googleAuthProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })
    };
    const loginUser = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError("")
                form.reset();
                navigate(from,{replace:true});
            })
            .catch(error => {
                console.log(error)
                const errormessage = error.message;
                setError(errormessage);
            })


    }
    return (
        <div className='w-full h-[400px]'>
            <div className="w-full max-w-xs mx-auto mt-36">
                <form onSubmit={loginUser} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name='email' type="email" placeholder="example@gmail.com" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name='password' type="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <p className='text-red-600 text-sm'>{error}</p>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'>
                            Log in
                        </button>
                        <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >
                            Forgot Password?
                        </Link>
                    </div>
                </form>
                <button onClick={handleGoogleSignIn} className="w-full justify-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 flex items-center px-4 border border-gray-400 rounded shadow">
                    <FaGoogle className='w-[50px]' /> <span> Sign in with google</span>
                </button>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Login;