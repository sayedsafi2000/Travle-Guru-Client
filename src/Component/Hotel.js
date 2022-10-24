import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';

const Hotel = () => {
    const hotelBooking = useLoaderData([]);
    console.log(hotelBooking)
    return (
        <div className='w-full  lg:flex lg:flex-row lg:justify-evenly md:flex md:flex-col lg:items-center my-20 px-5'>
            <div className='lg:w-1/2 md:w-full md:text-center lg:text-start '>
                <h2 className='text-white text-5xl font-bold mb-5'>{hotelBooking.author.name}</h2>
                <p className='text-white mb-10'>{hotelBooking.details}</p>
            </div>
            <div>
                <form class="w-full max-w-lg bg-white p-8 mx-auto ">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                From
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Sreemangal" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                To
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Dhaka" />
                        </div>
                    </div>
                    <div class="flex items-center justify-center">
                        <div class="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
                            <div className="flex justify-between">
                                <div className="mb-2">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-semibold text-gray-800"
                                    >
                                        Booking Date
                                    </label>
                                    <input
                                        type="date"
                                        name="from-destination"
                                        className="block w-full px-4 py-2 mt-2 text-dark bg-white border rounded-md focus:border-gray-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        required
                                    />
                                </div>
                                <div className="mb-2">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-semibold text-gray-800"
                                    >
                                        Leaving Date
                                    </label>
                                    <input
                                        type="date"
                                        name="from-destination"
                                        className="block w-full px-4 py-2 mt-2 text-dark bg-white border rounded-md focus:border-gray-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        required
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Hotel;