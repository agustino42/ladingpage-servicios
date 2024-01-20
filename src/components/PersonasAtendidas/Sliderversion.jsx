import React from 'react'
import Slider from 'react-slick'
import { testimonialsData } from "@/src/utils/data"
import Image from "next/image"

const Sliderversion = () => {
  const settings = {
     dots: true,
     Infinity: true,
     speed: 1000,
     slideToShow: 3,
     slidesToScroll: 1,
     initialSlide: 0,
     touchMove: true,
     useCSS: true,
     resposive: [
       {
        breakpoint: 1024,
        settings: {
          dots: true,
          Infinity: true,
          slideToShow: 3,
          slidesToScroll: 3,
        },
        
       },
       {
        breakpoint: 1000,
        settings: {
          slideToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
        
       },
       {
        breakpoint: 768,
        settings: {
          slideToShow: 1,
          slidesToScroll: 1,
        },
        
       },
     ],
  }
  
  return (
    <div>
    <Slider {...settings}>
      {
        testimonialsData.map((comment, i) => (
          <div key={i} className='comment'>
             {/** Upper Side Section */}
            
            <div className='c-content'>
             <Image 
             src={"/features/testimonials.png"}
             className='apos-slider'
             alt='apos'
             width={100}
             height={80}
             />
             <span>{comment.comment}</span>
            </div>
              
              {/**Lower Side Section */}
                <div className="c-info">
                   <div className="c-avatar">
                       {comment.name[0]} 
                   </div>

                   <div className="c-person">
                    <span>
                      {comment.name}
                    </span>
                    <span>
                      {comment.profession}
                    </span>
                   </div>

                </div>
          </div>
        ))
      }
    </Slider>
    </div>
  )
}

export default Sliderversion