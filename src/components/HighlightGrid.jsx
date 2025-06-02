

import React from 'react';
import './HighlightGrid.css';
import { Row, Col } from 'antd';

const highlights = [
  {
    title: 'Sản phẩm',
    highlight: 'Đa dạng bậc nhất',
    description: 'Bao gồm biệt thự, liền kề, shophouse và 17 tòa chung cư – đáp ứng mọi nhu cầu an cư & đầu tư.',
    image: '/highlights/product.jpg',
  },
  {
    title: 'Quy mô',
    highlight: 'Lớn nhất khu Tây Bắc',
    description: 'Gần 200 ha – gấp 3 lần một dự án khu đô thị trung bình, tích hợp đầy đủ tiện ích sống.',
    image: '/highlights/scale.jpg',
  },
  {
    title: 'Tiện ích',
    highlight: 'Tất cả trong một',
    description: 'Vincom, Vinschool, Vinmec, công viên, hồ trung tâm… tất cả ngay trong khuôn viên.',
    image: '/highlights/utility.jpg',
  },
  {
    title: 'Vị trí',
    highlight: 'Kết nối chiến lược',
    description: 'Nằm tại Hậu Nghĩa – cửa ngõ Tây Bắc TP.HCM, liền kề Củ Chi, kết nối nhanh vào trung tâm.',
    image: '/highlights/location.jpg',
  },
];

const HighlightGrid = () => {
  return (
    <div className="highlight-grid">
      <Row gutter={[24, 24]}>
        {highlights.map((item, index) => (
          <Col xs={24} md={12} xl={6} key={index}>
            <div className="highlight-box">
              <img src={item.image} alt={item.title} className="highlight-img" />
              <div className="highlight-text">
                <div className="highlight-title">
                  {item.title}{' '}
                  <span className="highlight-emphasis">{item.highlight}</span>
                </div>
                <div className="highlight-description">{item.description}</div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HighlightGrid;
