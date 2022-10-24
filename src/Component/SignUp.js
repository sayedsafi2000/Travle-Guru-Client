import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Context/AuthContext';
const SignUp = () => {
    const { googleProvider, logIn, updateUserProfile ,verifyEmail} = useContext(AuthContext);
    const googleAuthProvider = new GoogleAuthProvider();
    const [accepted, setAccepted] = useState(false);
    const handleGoogleSignIn = () => {
        googleProvider(googleAuthProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const userLogin = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        console.log(name, email, photoURL, password);

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerify();
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleEmailVerify = ()=>{
        verifyEmail()
        .then(()=>{})
        .catch(error=>{
            console.log(error)
        })
    }

        const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                console.error(error)
            })
    }
    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }
    return (
        <>
            <form onSubmit={userLogin} className="w-full max-w-lg mx-auto mt-36">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="text-white block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Full Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name='name' />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="text-white  block uppercase tracking-wide    text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-200   border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" name='email' placeholder="example@gmail.com" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="text-white  block uppercase tracking-wide    text-xs font-bold mb-2" htmlFor="photoURL">
                            photoURL
                        </label>
                        <input className="appearance-none block w-full bg-gray-200    border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="photoURL" name='photoURL' type="text" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="text-white  block uppercase tracking-wide    text-xs font-bold mb-2" htmlFor="grid-password">
                            Password
                        </label>
                        <input className="appearance-none block w-full bg-gray-200    border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" name='password' type="password" placeholder="******************" />

                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="label cursor-pointer block">
                            <span className="label-text text-white mr-3">Accept our terms and conditions  </span>
                            <input onClick={handleAccepted} type="checkbox" className="checkbox border-4 border-gray-800" />
                        </label>
                    </div>

                    <button type='submit' disabled={!accepted} className=" bg-blue-500 hover:bg-blue-700 mt-8 mx-auto text-white font-bold py-2 px-4 rounded-full">
                        Button
                    </button>
                </div>
            </form>
            <button onClick={handleGoogleSignIn} className="w-full justify-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 flex items-center px-4 border border-gray-400 rounded shadow">
                <FaGoogle className='w-[50px]' /> <span> Sign in with google</span>
            </button>
        </>
    );
};

export default SignUp;