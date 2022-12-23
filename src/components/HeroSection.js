import React from 'react';

const HeroSection = () => {
    return (
        <div className='w-full h-[90vh]'>
            <img src="https://i.ibb.co/ch71Jx4/hallstatt-3609863-340.jpg" alt=""
            className='w-full h-full object-cover'/>
            <div className='max-w-[1140px] m-auto'>
                <div className='absolute top-[40%] md:-[-50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                    <h1 className='font-bold text-4xl '>Find Your Special Trip</h1>
                    <h2 className='text-4xl py-4 italic'>With Weekaway</h2>
                    <p className='justify-center text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius culpa voluptatibus, aut architecto consequatur rem veritatis ratione, error voluptas vero nihil dolorem enim aspernatur. Deserunt.
                    Lorem ipsum dolor, sit amet </p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;