import React from 'react';
import { Row, Col } from 'antd';
import './InfoGrid.css';
import Title from "./Title";

const InfoGrid = () => {
  const features = [
    'Trung tâm thương mại Vincom Mega Mall rộng ~9,6ha',
    'Hệ thống trường học liên cấp Vinschool ngay trong khu',
    'Bệnh viện đa khoa quốc tế Vinmec hiện đại, phục vụ nội khu',
    'Công viên trung tâm và hồ điều hòa rộng tổng cộng 35,8ha'
  ];

  return (
    <div className="info-grid">
      <Col span={24}>
        <Title level={4}>Các thông số nổi bật tại Vinhomes Green City</Title>
      </Col>
      <Row gutter={[16, 16]}>
        <Col span={8} className="info-item">
          <p><strong>197,2 ha</strong> tổng diện tích toàn khu</p>
        </Col>
        <Col span={8} className="info-item">
          <p><strong>~5.000</strong> sản phẩm nhà ở đa dạng</p>
        </Col>
        <Col span={8} className="info-item">
          <p><strong>40.000</strong> cư dân dự kiến</p>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={8} className="info-item">
          <p><strong>~25%</strong> mật độ xây dựng</p>
        </Col>
        <Col span={8} className="info-item">
          <p><strong>20 ha</strong> hồ điều hòa trung tâm</p>
        </Col>
        <Col span={8} className="info-item">
          <p><strong>12</strong> công viên sinh thái chủ đề</p>
        </Col>
        <Col span={24}>
          <Title level={4}>Tiện ích nổi bật trong nội khu Vinhomes Green City</Title>
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
