import React from 'react';
import './GreenCityRatioSection.css';

const GreenCityRatioSection = () => {
  return (
    <div className="green-city-overlay">
      <div className="green-city-title">
        <div className="green-city-script">Vinhomes Green City</div>
        <div className="green-city-bold">
          Quy hoạch <span>đồng bộ & đẳng cấp</span>
        </div>
        <div className="green-city-sub">
          Mật độ xây dựng chỉ ~25%, hơn 35ha cây xanh & mặt nước
        </div>
      </div>
      <div className="green-city-bar">
        <div className={"bar-group"} style={{ width: '55%' }}>
          <div className="bar-label">Cảnh quan</div>
          <div className="bar green" style={{width: '100%'}} >
            <span>55%</span>
          </div>
        </div>
        <div className={"bar-group"} style={{ width: '19.5%' }}>
          <div className="bar-label">Nhà ở</div>
          <div className="bar gray" style={{width: '100%'}} >
            <span>19,5%</span>
          </div>
        </div>
        <div className={"bar-group"} style={{ width: '25.5%' }}>
          <div className="bar-label">Tiện ích & hạ tầng</div>
          <div className="bar orange" style={{width: '100%'}} >
            <span>25,5%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenCityRatioSection;
