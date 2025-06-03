import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

const TopMenu = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = (event, anchor) => {
    event.preventDefault();
    const targetElement = document.querySelector(anchor);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollSpy = () => {
    const sections = ['#gioi-thieu', '#chinh-sach', '#tien-ich', '#quy-mo', '#dich-vu'];
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (let i = 0; i < sections.length; i++) {
      const section = document.querySelector(sections[i]);
      if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
        setActiveSection(sections[i]);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollSpy);
    return () => {
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, []);

  return (
    <Header className="top-menu">
      <div className="logo">
        <img src="/main-banner/logo.png" alt="Vinhomes Green City" />
        Vinhomes Green City
      </div>
      <nav>
        <a href="#gioi-thieu" onClick={(e) => handleScroll(e, '#gioi-thieu')} className={activeSection === '#gioi-thieu' ? 'active' : ''}>Tổng quan</a>
        <a href="#chinh-sach" onClick={(e) => handleScroll(e, '#chinh-sach')} className={activeSection === '#chinh-sach' ? 'active' : ''}>Sản phẩm</a>
        <a href="#tien-ich" onClick={(e) => handleScroll(e, '#tien-ich')} className={activeSection === '#tien-ich' ? 'active' : ''}>Tiện ích</a>
        <a href="#quy-mo" onClick={(e) => handleScroll(e, '#quy-mo')} className={activeSection === '#quy-mo' ? 'active' : ''}>Hạ tầng</a>
        <a href="#dich-vu" onClick={(e) => handleScroll(e, '#dich-vu')} className={activeSection === '#dich-vu' ? 'active' : ''}>Liên hệ</a>
      </nav>
    </Header>
  );
};

export default TopMenu; 