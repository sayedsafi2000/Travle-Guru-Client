import React from 'react';
import { Link } from 'react-router-dom';

const DisplayHotel = ({ hotel }) => {
    console.log(hotel)
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-4">
            <img class="w-full" src={hotel.image_url} alt="Sunset in the mountains"/>
                <div class="px-6 py-4">
                    <div class="font-bold text-white text-xl mb-2">The Coldest Sunset</div>
                    <p class="text-white text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${hotel.price}</span>
                    <span class="inline-block bg-warning rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><Link to={`/hotel/${hotel._id}`}><button>Booking Now</button></Link></span>
                </div>
        </div>
    );
};

export default DisplayHotel;