import React from 'react';
import { Carousel, Image } from 'antd';
import './Banner.css';

const Banner = (...props) => {
  return (
    <Carousel autoplay dots={true} dotPosition='bottom' className='banner-carousel' {...props}>
      <div className="carousel-item">
        <Image src={'image1.png'} preview={false}/>
      </div>
      <div className="carousel-item">
        <Image src={'image2.png'} preview={false}/>
      </div>
      <div className="carousel-item">
        <Image src={'image3.png'} preview={false}/>
      </div>
      <div className="carousel-item">
        <Image src={'image4.png'} preview={false}/>
      </div>
    </Carousel>
  );
};

export default Banner;
