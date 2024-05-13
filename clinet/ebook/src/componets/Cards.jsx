import React from 'react';

const Cards = ({item}) => {
    console.log(item);
    return (
        <>
        <div className='mt-2 my-3 p-3 '>
            <div className="card w-92 bg-base-100 shadow-xl mx-2 hover:scale-105 duration-300 dark:bg-gray-100 dark:text-gray-950 dark:border">
              <figure><img src={item.image} className='o object-cover'alt="book" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  {item.name} 
                  <div className="badge badge-secondary">{item.catagory}</div>
                </h2>
                <p>{item.title}</p>
                <div className="card-actions justify-between">
                  <div className="badge badge-outline">{item.price} $</div> 
                  <div className="c cursor-pointer p-3 badge badge-outline hover:bg-blue-400 duration-30 hover:text-white">Read Now!</div>
                </div>
              </div>
            </div>

        </div>
        
            
        </>
    );
};

export default Cards;