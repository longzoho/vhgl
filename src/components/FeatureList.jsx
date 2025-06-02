import React from 'react';
import './FeatureList.css';

const features = [
  'Không gian thương mại, dịch vụ cho cư dân',
  'Vị trí trung tâm của khu đô thị, "đường về nhà" của cư dân Sky Retreat',
  'Trực diện quảng trường, vườn retreat, công viên tuyến tính',
  'Loại hình sản phẩm: Shop Villa, Shophouse, Town Villa, Town House.'
];

const FeatureList = () => {
  return (
    <ul className="feature-list">
      {features.map((feature, index) => (
        <li key={index} className="feature-item">
          <span className="feature-icon">★</span>
          {feature}
        </li>
      ))}
    </ul>
  );
};

export default FeatureList; 