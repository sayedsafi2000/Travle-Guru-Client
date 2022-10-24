import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const signOut = () => {
        logOut()
            .then(() => toast.success('Loged Out Successfully!', {
                position: "top-right",
                autoClose: 700,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }))
            .catch (error => {
    console.log(error)
})
    }
return (
    <div>
        <div className="navbar flex">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost normal-case text-xl "><h1 className='text-white text-3xl'>Travle guru</h1></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='text-white'><Link to="/login">Log In</Link></li>
                    <li className='text-white'><Link to="/signup">Sign Up</Link></li>
                </ul>
            </div>
            <div className="navbar-end ">
                {user?.uid ?
                    <>
                        <Link><button onClick={signOut} className='text-white lg:mr-4 btn btn-warning'>Log Out</button></Link>
                        <p className='text-white lg:mr-4 text-sm lg:text-lg'>{user?.displayName}</p>
                    </>
                    :
                    <>
                        <Link to="/login"><button className='text-white  lg:mr-4'>Log in</button></Link>
                        <Link to="/signup"><button className='text-white  lg:mr-4'>Register</button></Link>
                    </>
                }

                <Link to={"/profile"} className="w-8"><img className='rounded rounded-[100%] ' src={user?.photoURL} alt="" /></Link>
            </div>
        </div>
    </div>
);
};

export default Header;