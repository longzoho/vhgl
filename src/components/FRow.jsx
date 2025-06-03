import React from 'react';
import { Row } from 'antd';

const FRow = (props) => {
  return <Row {...props} style={{ ...(props.style || {}), minHeight: '100vh' }}/>;
}

export default FRow;
