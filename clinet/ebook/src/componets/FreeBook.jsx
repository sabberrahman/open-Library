import React from 'react';
import list from "../../public/list"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

const FreeBook = () => {
    const freeBook= list.filter((data)=>data.catagory=== "free");

    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "black" }}
          onClick={onClick}
        />
      );
    }

    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "black" }}
          onClick={onClick}
        />
      );
    }
    
    const setting= {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
    
    
    return (
        <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div>
                <h1 className='text-xl font-semibold pb-2'>Free Books </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur delectus ut magnam unde qeniam consequatur reiciendis, fugiat enim culpa ratione vitae ut!</p>
            </div>

         <div className='md:m-4 mt-2 mr-2  '>
         <Slider {...setting}>
         {freeBook.map((item)=>(
            <Cards item={item} key={item.id}/>
         ))}
        </Slider>
         </div>
           
        </div>
        
            
        </>
    );
};

export default FreeBook;