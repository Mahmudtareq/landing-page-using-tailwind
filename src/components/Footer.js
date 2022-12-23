import React from 'react';
import { BsChatSquareDots } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className=' bg-slate-300 p-10 py-10'>
            <div className='flex items-center justify-center '>
                <BsChatSquareDots size={30} className="text-[var(--primary-dark)] mr-2" />
                <h1 className='text-xl font-bold text-gray-700'>WEEKAWAY</h1>
            </div>
            <div>
                <p className='text-center text-black'>Tareq @ Mahmud</p>
            </div>
        </div>
    );
};

export default Footer;