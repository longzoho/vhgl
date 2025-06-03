import React from 'react';
import FacilityItem from './FacilityItem';
import './FacilityShowcase.css';

const FacilityShowcase = () => {
  return (
    <div className="facility-showcase">
      <div className="facility-heading">
        <div className="sub-title">Tiện ích</div>
        <div className="main-title">VINHOMES GREEN CITY</div>
      </div>
      <FacilityItem
        title="Sở hữu “bộ sưu tập” hệ tiện ích All-in-one đẳng cấp"
        content="Mật độ xây dựng của dự án chỉ chiếm 25%, con số này cho thấy Vinhomes Green City chú trọng đến các hạng mục tiện ích và hệ thống giao thông nội khu. Điều này hoàn toàn phù hợp với định hướng của dự án – đó là khu đô thị tích hợp “TẤT CẢ TRONG MỘT”, nơi cư dân được tận hưởng cuộc sống đủ đầy, trọn vẹn và tiện nghi bậc nhất."
        img="facility-showcase/all-in-one.png"
        mode="right"
      />
      <FacilityItem
        title="Khu trung tâm thương mại Vincom Mega Mall"
        content="Nằm ở phía Bắc dự án, bên cạnh khu nhà ở cao tầng. Đây là đại tiện ích nổi bật nhất tại Vinhomes Green City Long An nói riêng và ở các dự án khu đô thị mang thương hiệu Vinhomes nói chung. Nơi đây có quy mô lớn, điểm đặt của các thương hiệu nổi tiếng, điểm đến vui chơi – giải trí bậc nhất."
        img="facility-showcase/mega-mall.png"
        mode="left"
      />
      <FacilityItem
        title="Khu Hồ trung tâm THE GREAT LAKE"
        content="THE GREAT LAKE là hồ điều hòa rộng gần 20ha – trái tim của khu đô thị với các hoạt động thể thao nước, khu dạo bộ, bến du thuyền, sân khấu nổi và công viên ánh sáng. Đây là không gian nghỉ dưỡng mỗi ngày dành cho cư dân."
        img="facility-showcase/the-great-lake.png"
        mode="right"
      />
      <FacilityItem
        title="Tiện ích khu trung tâm ngoài trời"
        content="Các công viên chủ đề, đường chạy bộ, sân thể thao ngoài trời, khu nướng BBQ, sân chơi trẻ em, vườn thiền… được bố trí hợp lý quanh khu trung tâm, tạo nên không gian sống năng động, thư thái và giàu tương tác cộng đồng."
        img="facility-showcase/central-out-side.png"
        mode="left"
      />
    </div>
  );
};

export default FacilityShowcase;
