import React from 'react';
import { Layout } from 'antd';
import './SectionContainer.css';

const { Content } = Layout;

const SectionContainer = ({ children, backgroundColor, backgroundImage }) => {
  const cssStyle = {}
  if (backgroundImage) {
    cssStyle.backgroundImage = `url(${backgroundImage})`;
    cssStyle.backgroundSize = 'cover';
  }
  if (backgroundColor) {
    cssStyle.backgroundColor = backgroundColor;
  }
  return (
    <section className="section-container" style={cssStyle}>
      <Content className='section-content'>
        {children}
      </Content>
    </section>
  );
};

export default SectionContainer;
