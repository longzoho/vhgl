import React from 'react';
import { Form, Input, Button, Row, Col, Typography } from 'antd';
import './LeadFormSection.css';

const { Title, Paragraph } = Typography;

function LeadFormSection({ title, subtitle, description }) {
  const onFinish = (values) => {
    console.log('Form submitted:', values);
  };

  return (
    <div className="lead-form-section">
      <div className="lead-form-content">
        <Title level={2} className="lead-form-title">{title}</Title>
        <Paragraph className="lead-form-subtitle">{subtitle}</Paragraph>
        <Paragraph className="lead-form-description">{description}</Paragraph>
        <Form layout="vertical" onFinish={onFinish} className="lead-form">
          <Row gutter={16}>
            <Col xs={24} md={8}>
              <Form.Item
                name="name"
                rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
              >
                <Input placeholder="Họ và tên (*)" />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                name="phone"
                rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}
              >
                <Input placeholder="Số điện thoại (*)" />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item name="interest">
                <Input placeholder="Nội dung quan tâm ..." />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="submit-button">
              NHẬN THÔNG TIN
            </Button>
          </Form.Item>
          <Paragraph className="hotline-text">HOTLINE: 0977 48 7777</Paragraph>
        </Form>
      </div>
    </div>
  );
}

export default LeadFormSection;
