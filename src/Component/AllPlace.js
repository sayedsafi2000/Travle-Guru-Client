import React from 'react';
import { useLoaderData } from 'react-router';
import DisplayHotel from './DisplayHotel';
import "./AllPlace.css"
const AllPlace = () => {
    const hotels = useLoaderData();
    return (
        <div>
            <div className='hotel'>
            {
                hotels.map(hotel=><DisplayHotel
                key={hotel._id}
                hotel={hotel}
                ></DisplayHotel>)
            }
            </div>
        </div>
    );
};

export default AllPlace;