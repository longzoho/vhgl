import React from 'react';
import './Paragraph.css';
import { Typography } from 'antd';

const { Paragraph } = Typography;


const CustomParagraph = (props) => {
  return (
    <Paragraph {...props} className={`${props.className} paragraph`} />
  );
};

export default CustomParagraph; 