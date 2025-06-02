import React from 'react';
import './Title.css';
import { Typography } from 'antd';

const { Title } = Typography;


const CustomTitle = (props) => {
  return (
    <Title {...props} className={`${props.className} title`} />
  );
};

export default CustomTitle; 