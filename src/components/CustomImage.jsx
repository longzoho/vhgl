import React from 'react';
import { Image } from 'antd';
import './CustomImage.css';

const CustomImage = (props) => {
  return (
    <div className="custom-image-wrapper">
      <Image {...props} className="custom-image" />
    </div>
  );
};

export default CustomImage; 