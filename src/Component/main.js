import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Footer';
import AllPlace from './AllPlace';
import Header from './Header';
import "./Main.css"
const Main = () => {
    return (
        <div className='main'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;