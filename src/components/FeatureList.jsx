import React from 'react';
import './FeatureList.css';

const features = [
  'Biệt thự ven hồ, bao quanh bởi công viên xanh mát',
  'Thiết kế sang trọng theo phong cách nghỉ dưỡng',
  'Kế cận trung tâm tiện ích: trường học, bệnh viện, Vincom',
  'Sản phẩm cao cấp: The Lake Villas, Garden Villa, Grand Villa'
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
