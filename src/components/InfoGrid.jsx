import React from 'react';
import { Row, Col } from 'antd';
import './InfoGrid.css';

const InfoGrid = () => {
  return (
    <div className="info-grid">
      <Row gutter={[16, 16]}>
        <Col span={8} className="info-item">
          <p><strong>18</strong> thang máy tốc độ cao (3m/s)</p>
        </Col>
        <Col span={8} className="info-item">
          <p><strong>33.500m<sup>2</sup></strong> hầm (có sky lounge)</p>
        </Col>
        <Col span={8} className="info-item">
          <p><strong>2.222</strong> chỗ đỗ xe</p>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={8} className="info-item">
          <p><strong>100%</strong> căn hộ vuông vức</p>
        </Col>
        <Col span={8} className="info-item">
          <p><strong>100%</strong> cửa kính không có hướng chính Tây</p>
        </Col>
        <Col span={8} className="info-item">
          <p><strong>100%</strong> của kính hướng Tây Bắc là kính Low-E</p>
        </Col>
      </Row>
    </div>
  );
};

export default InfoGrid; 