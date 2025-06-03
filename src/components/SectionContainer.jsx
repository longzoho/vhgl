import React, { useEffect, useRef } from 'react';
import { Layout } from 'antd';
import './SectionContainer.css';

const { Content } = Layout;

const SectionContainer = ({ children, backgroundColor, backgroundImage, anchorName }) => {
  const rowRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          rowRef.current.focus();
        } else {
          console.log('Element is not intersecting, focus will not be applied.');
        }
      },
      { threshold: 0.5 }
    );

    const currentRowRef = rowRef.current;

    if (currentRowRef) {
      observer.observe(currentRowRef);
    }

    return () => {
      if (currentRowRef) {
        observer.unobserve(currentRowRef);
      }
    };
  }, []);
  const cssStyle = {}
  if (backgroundImage) {
    cssStyle.backgroundImage = `url(${backgroundImage})`;
    cssStyle.backgroundSize = 'cover';
  }
  if (backgroundColor) {
    cssStyle.backgroundColor = backgroundColor;
  }
  return (
    <section ref={rowRef} className="section-container" style={cssStyle} id={anchorName} tabIndex="-1">
      <Content className='section-content'>
        {children}
      </Content>
    </section>
  );
};

export default SectionContainer;
