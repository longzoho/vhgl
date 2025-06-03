import React from 'react';
import { Row, Col } from 'antd';
import './ProjectOverview.css';

const ProjectOverview = () => {
  return (
    <div className="project-overview">
      <h2 className="section-title">Thông Tin Tổng Quan</h2>

      <Row gutter={[16, 16]}>
        <Col md={12} span={24}>
          <p><strong>Tên dự án:</strong> Vinhomes Green City</p>
          <p><strong>Chủ đầu tư:</strong> Tập đoàn Vingroup</p>
          <p><strong>Vị trí:</strong> Hậu Nghĩa, Đức Hòa, Long An</p>
          <p><strong>Thiết kế & thi công:</strong> Vingroup & Vincons</p>
        </Col>
        <Col md={12} span={24}>
          <p><strong>Quy mô:</strong> 197,2 ha (~5.000 sản phẩm)</p>
          <p><strong>Mật độ xây dựng:</strong> 25%</p>
          <p><strong>Pháp lý:</strong> Quyết định chủ trương đầu tư (đã có)</p>
          <p><strong>Bàn giao:</strong> Dự kiến từ năm 2026</p>
        </Col>
      </Row>

      <hr />

      <Row gutter={[16, 16]}>
        <Col md={12} span={24}>
          <p><strong>Tiện ích nổi bật:</strong></p>
          <ul className="feature-list">
            <li>Trung tâm thương mại Vincom 9.6 ha</li>
            <li>Hệ thống trường học Vinschool</li>
            <li>Bệnh viện Vinmec</li>
            <li>Công viên trung tâm & hồ điều hòa 35,8 ha</li>
            <li>12 công viên chủ đề, phố đi bộ</li>
          </ul>
        </Col>
        <Col md={12} span={24}>
          <p><strong>Loại hình sản phẩm:</strong></p>
          <ul className="feature-list">
            <li>Căn hộ cao tầng</li>
            <li>Nhà phố thương mại (shophouse)</li>
            <li>Biệt thự đơn lập, song lập, liền kề</li>
            <li>Dinh thự cao cấp The Lake Villas</li>
          </ul>
        </Col>
      </Row>

      <hr />

      <Row gutter={[16, 16]}>
        <Col md={24}>
          <p><strong>Giá bán tham khảo:</strong></p>
          <ul className="feature-list">
            <li>Nhà phố liền kề: từ 5 tỷ</li>
            <li>Biệt thự: từ 15–30 tỷ</li>
            <li>Chung cư: đang cập nhật</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectOverview;
