import React from 'react';
import list from "../../public/list.json"
import Cards from './Cards';
import { Link } from 'react-router-dom';

const Coursecards = () => {
    console.log(list);
    return (
        <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-gray-100'>
            <div className='mt-28 items-center justify-center text-center'>
              <h1 className='text-2xl md:text-4xl'>welcome to the all book section <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>EXPORE!!</span></h1>
              <p className='mt-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, quis maiores? Laudantium soluta ipsa ut.</p>
              <Link to="/">
              <button className='bg-indigo-500 shadow-lg shadow-indigo-500/50 btn text-white  mt-6 text-xl font-mono'>Go Back</button>
              </Link>
              
            </div>

            <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                {list.map((item)=>(
                 <Cards item={item} key={item.id} />
                ))}
            </div>
        </div>
            
        </>
    );
};

export default Coursecards;