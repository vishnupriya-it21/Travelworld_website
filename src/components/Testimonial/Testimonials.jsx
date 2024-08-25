import React from 'react'
import Slider from 'react-slick'
import ava01 from 'F:/MernStack-Tour-Management-main/tour-management/frontend/src/assets/images/ava-1.jpg'; 
import ava02 from 'F:/MernStack-Tour-Management-main/tour-management/frontend/src/assets/images/ava-2.jpg';
import ava03 from 'F:/MernStack-Tour-Management-main/tour-management/frontend/src/assets/images/ava-3.jpg';

const Testimonials = () => {
    const settings ={
        dots: true,
        infinite: true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite:true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                   
                },
            },
        ]

    }

  return( 
  <Slider {...settings}>
    <div className="testimonial py-4 px-3">
        <p>
        The greatest glory in living lies not in never falling, but in rising every time we fall.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'> John Micheal  </h6>            
               
                <p>Customer</p>
               
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>
        The greatest glory in living lies not in never falling, but in rising every time we fall.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Rani Sing
                </h6>
                    <p>Customer</p>
                    
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>
        The greatest glory in living lies not in never falling, but in rising every time we fall.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'> Salin Richard
                </h6>
                    <p>Customer</p>
                   
            </div>
        </div>
    </div>


    <div className="testimonial py-4 px-3">
        <p>
        The greatest glory in living lies not in never falling, but in rising every time we fall.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Rani Sing
                </h6>
                    <p>Customer</p>
                    
            </div>
        </div>
    </div>
  </Slider>
  )
}

export default Testimonials;