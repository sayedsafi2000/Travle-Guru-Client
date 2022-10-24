import React from 'react';
import Place from './Place';

const Home = () => {
    return (
            <div className="w-full mx-auto">
                <div className="hero-content flex-col mx-auto justify-center items-center mt-20">
                    <div className='lg:w-3/5 text-center'>
                        <h2 className='md:text-2xl lg:text-5xl  font-bold text-white mb-5'>Want to visit the most beautiful places in Bangladesh?</h2>
                        <p className='text-white'>Select your destination.We provide best hotels under your budget.If you want we can give you best vhiecle.
                        </p>
                    </div>
                    <div className='w-full mb-36'>
                        <Place></Place>
                    </div>
                </div>
            </div>
    );
};

export default Home;