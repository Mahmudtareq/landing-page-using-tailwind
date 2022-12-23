import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
            <h2 className='text-center text-gray-700 '>Send a Message</h2>
            <p className='text-center text-gray-700 py-2'>We're Standing by!</p>
            <div className='grid md:grid-cols-2'>
                <img className='w-full object-cover md:h-full p-2 max-h-[520px] h-[200px]' src="https://i.ibb.co/nzTTqv4/gallery2.jpg" alt="/" />
                <form >
                    <div className='grid grid-cols-2'>
                        <input className='border m-2 p-2' type="text" placeholder='First Name' />
                        <input className='border m-2 p-2' type="text" placeholder='Last Name' />
                        <input className='border m-2 p-2' type="email" placeholder='Email' />
                        <input className='border m-2 p-2' type="tel" placeholder='Phone' />
                        <input className='border col-span-2 m-2 p-2' type="text" placeholder='Address' />
                        <textarea className='border m-2 p-2 col-span-2' cols="25" rows="8" placeholder='Write your message here ' />
                        <button className='col-span-2 m-2 rounded-2xl'>Submit</button>
                    </div>
                </form>
            </div>

            
        </div>
    );
};

export default Contact;