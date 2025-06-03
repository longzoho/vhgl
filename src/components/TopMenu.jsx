import { useEffect, useState, useCallback } from "react";
import { Header } from "antd/es/layout/layout";

const TopMenu = ({ menuItems }) => {
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

  const handleScrollSpy = useCallback(() => {
    const sections = menuItems.map(item => `#${item.anchorName}`);
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (let i = 0; i < sections.length; i++) {
      const section = document.querySelector(sections[i]);
      if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
        setActiveSection(sections[i]);
        break;
      }
    }
  }, [menuItems]);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollSpy);
    return () => {
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, [handleScrollSpy]);

  return (
    <Header className="top-menu">
      <div className="logo">
        <img src="/main-banner/logo.png" alt="Vinhomes Green City"/>
        Vinhomes Green City
      </div>
      <nav>
        {menuItems.map((item, index) => (
          <a
            key={item.anchorName || index}
            href={`#${item.anchorName}`}
            onClick={(e) => handleScroll(e, `#${item.anchorName}`)}
            className={activeSection === `#${item.anchorName}` ? 'active' : ''}
          >
            {item.title}
          </a>
        ))}
      </nav>
    </Header>
  );
};

export default TopMenu;
