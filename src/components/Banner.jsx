import React from 'react';
import { Carousel } from 'antd';
import './Banner.css';

const Banner = (...props) => {
  return (
    <Carousel autoplay dots={true} dotPosition='bottom' className='banner-carousel' {...props}>
      <div className="carousel-item">
        <img src="image1.jpg" alt="Image 1" className="square-image" />
      </div>
      <div className="carousel-item">
        <img src="image2.jpg" alt="Image 2" className="square-image" />
      </div>
      <div className="carousel-item">
        <img src="image3.jpg" alt="Image 3" className="square-image" />
      </div>
      <div className="carousel-item">
        <img src="image4.jpg" alt="Image 4" className="square-image" />
      </div>
    </Carousel>
  );
};

export default Banner; 