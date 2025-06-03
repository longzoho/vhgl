import React from 'react';
import { Row, Col } from 'antd';
import Paragraph from './Paragraph';
import './FacilityShowcase.css';

const FacilityItem = ({ title, content, img, mode }) => {
  const isLeft = mode === 'left';
  const rowClass = `facility-block ${isLeft ? 'reverse' : ''}`;

  return (
    <Row gutter={[32, 32]} align="middle" className={rowClass}>
      <Col xs={24} md={12}>
        <div className="fade-in">
          <img className="facility-img" src={img} alt={title} />
        </div>
      </Col>
      <Col xs={24} md={12}>
        <div className="facility-content fade-in">
          <h3 className="facility-title">{title}</h3>
          <Paragraph>{content}</Paragraph>
        </div>
      </Col>
    </Row>
  );
};

export default FacilityItem;
