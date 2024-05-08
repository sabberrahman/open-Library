import React from 'react';

const Cards = ({item}) => {
    console.log(item);
    return (
        <>
        <div className="card w-96 bg-base-100 shadow-xl mx-2">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name} 
      <div className="badge badge-secondary">{item.catagory}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{item.price} $</div> 
      <div className="badge badge-outline hover:bg-blue-400 duration-30 hover:text-white">Read Now!</div>
    </div>
  </div>
</div>
            
        </>
    );
};

export default Cards;