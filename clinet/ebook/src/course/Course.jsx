import React from 'react';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';
import Coursecards from '../componets/Coursecards';
import list from "../../public/list.json"


const Courses = () => {
    return (
        <>
        <Navbar/>
        <div className='min-h-screen '>
          <Coursecards/>  
        </div>
        
        <Footer/>
        </>
    );
};

export default Courses;