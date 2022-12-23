import React from 'react';

const Activities = () => {
    return (
        <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-gray-50 font-bold'>Resorts</h3>
                <img  className='h-full w-full object-cover relative border-4 border-white shadow-lg' src="https://i.ibb.co/LhbBw8g/roberto-nickson-MA82m-PIZe-GI-unsplash.jpg" alt="" />
            </div>

            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-gray-50 font-bold'>Resorts</h3>
                <img className='h-full w-full object-cover relative border-4 border-white shadow-lg'
                    src="https://i.ibb.co/LhbBw8g/roberto-nickson-MA82m-PIZe-GI-unsplash.jpg" alt="" />
            </div>

            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-gray-50 font-bold'>Resorts</h3>
                <img className='h-full w-full object-cover relative border-4 border-white shadow-lg'src="https://i.ibb.co/BZ6jn4S/gerardo-mr-p-Qr-Xgg-KVvz-I-unsplash.jpg" alt="" />
            </div>
        </div>
    );
};

export default Activities;