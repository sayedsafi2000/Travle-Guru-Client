import React from 'react';
import { Link } from 'react-router-dom';
import "./Display.css"
const Display = ({places}) => {
    console.log(places)
    return (
        <div className='thumb'>
            <Link to={`/place/${places.id}`}>
            <img className='img' src={places.thumbnail_url} alt="" />
            <p className='text-black'>{places.name}</p>
            </Link>
        </div>
    );
};

export default Display;