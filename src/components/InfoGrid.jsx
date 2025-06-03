import React from 'react';
import { Row, Col } from 'antd';
import './InfoGrid.css';
import Title from "./Title";

const InfoGrid = () => {
  const features = [
    'Biệt thự ven hồ, bao quanh bởi công viên xanh mát',
    'Thiết kế sang trọng theo phong cách nghỉ dưỡng',
    'Kế cận trung tâm tiện ích: trường học, bệnh viện, Vincom',
    'Sản phẩm cao cấp: The Lake Villas, Garden Villa, Grand Villa'
  ];

  return (
    <div className="info-grid">
      <Col span={24}>
        <Title level={4}>Những con số “biết nói” về đại đô thị Vinhomes Green City</Title>
      </Col>
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
        <Col span={24}>
          <Title level={4}>Phân khu The Lake Villas – ấn tượng với 517 căn biệt thự sinh thái ven hồ</Title>
        </Col>
        <Col span={24}>
          <ul className="feature-list">
            {features.map((feature, index) => (
              <li key={index} className="feature-item">
                <span className="feature-icon">★</span>
                {feature}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default InfoGrid;
