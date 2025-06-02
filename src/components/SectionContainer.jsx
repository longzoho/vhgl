import React from 'react';
import { Layout } from 'antd';
import './SectionContainer.css';

const { Content } = Layout;

const SectionContainer = ({ children, backgroundColor }) => {
  return (
    <section className="section-container" style={{ backgroundColor: backgroundColor || 'None' }}>
      <Content className='section-content'>
        {children}
      </Content>
    </section>
  );
};

export default SectionContainer;
