import React from 'react';

const Banner = () => {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
                <div className=' order-2 w-full md:w-1/2 mt-6 md:mt-24 md:order-1'>
                    <div className='s md:space-y-10 space-y-8'>
                        <h1 className='text-4xl font-bold'>Hello , welcome here to Learn something <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'> new everyday!!!</span></h1>
                    <p className='text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum itaque eum saepe provident dicta, similique quis facere dolores, blanditiis ea adipisci architecto explicabo rerum, deserunt mollitia recusandae? Obcaecati, excepturi dicta!</p>
                     <label className="input input-bordered flex items-center gap-2 dark:bg-gray-100 dark:text-gray-950">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text" className=" grow outline-none bg-transparent " placeholder="Email" /></label>

                 </div> 
                    <button class="bg-indigo-500 shadow-lg shadow-indigo-500/50 btn text-white  mt-6 text-xl font-mono">Subscribe</button> 

                    
                </div>
                <div className='w-full md:w-1/2 order-1'>
                    <img src="/OIP (1).jpg" alt="" className=' rounded-md md:w-92 md:h-92 md:m-10 mt-10 md:mt-24 md:ml-10 ' />
                </div>
            </div>
        </>
    );
};

export default Banner; 