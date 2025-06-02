import logo from './logo.svg';
import './App.css';
import { Button, Row, Col, Layout, Space } from 'antd';
import Banner from './components/Banner';
import InfoGrid from './components/InfoGrid';
import Title from './components/Title';
import SectionContainer from './components/SectionContainer';
import FeatureList from './components/FeatureList';
import Image from './components/CustomImage';
import Paragraph from './components/Paragraph';


function App() {
  return (
    <Layout>
      <SectionContainer backgroundColor={'#09261d'}>
        <Row align={'middle'} justify={'center'}>
          <Col xl={12}>
            <Row>
              <Col span={24}>
                <Image src={"main-banner/title.png"} preview={false}/>
              </Col>
              <Col span={24}>
                <Paragraph>Xây dựng mô hình khu đô thị trên thị trường không hiếm, nhưng kiến tạo môi trường đáng sống
                  đúng nghĩa, mang đến những giá trị đích thực thì không phải dự án nào cũng làm được.
                  Những khu đô thị xanh của Nhà sáng lập Ecopark là ngoại lệ - nơi mọi chủ nhân đều tự hào về quyết định
                  sở hữu và đầu tư của mình.
                </Paragraph>
              </Col>
            </Row>
          </Col>
          <Col xl={12}>
            <Image src={"main-banner/img.png"} preview={false}/>
          </Col>

        </Row>
      </SectionContainer>
      <SectionContainer>
        <Row gutter={16} align="middle" justify="center">
          <Col xl={12} md={24}>
            <Banner/>
          </Col>
          <Col xl={12} md={24}>
            <Row>
              <Col span={24}>
                <Image src={"image.png"} preview={false}/>
              </Col>
              <Col span={24}>
                <Title level={4}>Những con số “biết nói” về bộ đôi tháp cao tầng đầu tiên tại Eco Retreat</Title>
              </Col>
              <Col span={24}>
                <InfoGrid/>
              </Col>
              <Col span={24}>
                <Title level={4}>Và PHỐ QUẢNG TRƯỜNG - 221 căn thấp tầng quanh khối đế Sky Retreat:</Title>
              </Col>
              <Col span={24}>
                <FeatureList/>
              </Col>
            </Row>
          </Col>
        </Row>
      </SectionContainer>
    </Layout>
  );
}

export default App;
